import React, { useState, useEffect } from "react";
import RecipeCards from '../components/RecipeCards';
import Auth from "../utils/auth";
import { saveRecipe, searchRecipes } from "../utils/api";
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage";

const SearchRecipes = () => {
  // create state for holding returned google api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved RecipeId values
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

  // set up useEffect hook to save `savedRecipeIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds);
  });

  // create method to search for Recipes and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchRecipes(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const recipeData = items.map((recipe) => ({
        recipeId: recipe.id,
        authors: recipe.volumeInfo.authors || ["No author to display"],
        title: recipe.volumeInfo.title,
        description: recipe.volumeInfo.description,
        image: recipe.volumeInfo.imageLinks?.thumbnail || "",
      }));

      // setSearchedRecipe(recipeData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a recipe to our database
  const handleSaveRecipe = async (recipeId) => {
    // find the recipe in `searchedRecipes` state by the matching id
    const recipeToSave = searchedRecipes.find(
      (recipe) => recipe.recipeId === recipeId
    );

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveRecipe(recipeToSave, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // if recipe successfully saves to user's account, save recipe id to state
      setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    <RecipeCards/>
    <h1> "recipes here!" </h1>
    </div>
  );

};

export default SearchRecipes;
