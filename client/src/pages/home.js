import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import RecipeCards from "../components/RecipeCards";
import Auth from "../utils/auth";
// import { saveRecipe, searchRecipes } from "../utils/api";
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

import { SAVE_RECIPE } from "../utils/mutations";
const SearchRecipes = () => {
  const [addSavedRecipe] = useMutation(SAVE_RECIPE);
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
      const data = response.hits;

      const recipeData = data.map(({ recipe }) => ({
        recipeId: uuidv4(),
        recipeName: recipe.label,
        recipeLink: recipe.url,
        photoLink: recipe.image,
      }));

      setSearchedRecipes(recipeData);
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
      const response = await addSavedRecipe(recipeToSave, token);

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
      <Form className="d-flex" onSubmit={handleFormSubmit}>
        <FormControl
          type="search"
          name="queryField"
          placeholder="Recipe Search..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Go!
        </Button>
      </Form>
      {searchedRecipes.map((data) => {
        return (
          <RecipeCards
            key={data.recipeId}
            recipeId={data.recipeId}
            recipeName={data.recipeName}
            recipeLink={data.recipeLink}
            photoLink={data.photoLink}
          />
        );
      })}
      <h1> "recipes here!" </h1>
    </div>
  );
};

export default SearchRecipes;
