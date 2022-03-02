import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, Container, Row, Col } from "react-bootstrap";
import RecipeCards from "../components/RecipeCards";
import Auth from "../utils/auth";
import { searchRecipes } from "../utils/api";
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from '@apollo/client';



import { SAVE_RECIPE } from "../utils/mutations";
const SearchRecipes = () => {
  const [addSavedRecipe] = useMutation(SAVE_RECIPE);
  // create state for holding returned google api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved RecipeId values
  const [savedRecipeIds] = useState(getSavedRecipeIds());

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
  const handleSaveRecipe = async (recipeId, recipeName, photoLink, recipeLink) => {
    const recipeToSave = {
      recipeId,
      label: recipeName,
      image: photoLink,
      url: recipeLink
    }
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await addSavedRecipe({
        variables: {
          recipe:recipeToSave
        }
      });

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // if recipe successfully saves to user's account, save recipe id to state
      // setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    } catch (err) {
      console.log(JSON.parse(JSON.stringify(err)))
    }
  };

  return (
    <div>
    <>
    <style type="text/css">
                    {`

                    body {
      background: radial-gradient(#334e43, #cee4ce); 
    }
    
    .btn-flat {
      background-color: #598787;
      
    }

    .btn-xxl {
      padding: 1rem 1.3rem;
      font-size: 1.5rem;
      border-radius: 50px;
      color: #f1d261;
      border-color: #f1d261; 
      border-width: 3px;
      font-family: 'Caveat', cursive;
    }

    .form-control {
      background-color:
      width: 75%;
      border-bottom: 3px solid #95a687;
      border-top: 3px solid #95a687;
    }

    .custom-border {
      border-bottom: 4px solid #f1d261;
    }
    `}
      </style>
      
      <div className="mt-3 col d-flex justify-content-center text-center custom-border">
      <Form className="d-flex justify-content-center w-50 mb-3" onSubmit={handleFormSubmit}>
        <FormControl
          type="search"
          name="queryField"
          placeholder="Recipe Search..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button variant="flat" size="xxl" type="submit">
          Go!
        </Button>
      </Form>
      </div>
      <div className="mt-3 justify-content-center text-center">
      {searchedRecipes.map(data => {
        return (
          <Container fluid="md">
  <Row>
    <Col><RecipeCards
          key={data.recipeId}
          recipeId={data.recipeId}
          recipeName={data.recipeName}
          recipeLink={data.recipeLink}
          photoLink={data.photoLink}
          loggedIn={Auth.loggedIn()}
          handleSave={handleSaveRecipe}
        /></Col>
  </Row>
</Container>
        
      )})}
      </div>
      
      </>
    </div>
    
      
  );
};

export default SearchRecipes;
