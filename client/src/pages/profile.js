import React from "react";
// import ProfileFavorites from "../components/ProfileFavorites";
// import ProfileWeek from "../components/ProfileWeek";
import Auth from "../utils/auth";
import { useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { removeRecipeId } from '../utils/localStorage';
import SavedRecipeCards from "../components/RecipeCards/index2";
import { REMOVE_RECIPE } from '../utils/mutations';
import{GET_ME} from '../utils/queries'
import { useMutation } from '@apollo/client';

const SavedRecipes = () => {
  const {loading,data} = useQuery(GET_ME);
  const [removeRecipe] = useMutation(REMOVE_RECIPE);

  const userData = data?.me || [];
  const handleDeleteRecipe = async (recipeId) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await removeRecipe({
        variables: { recipeId }

      });

      if(!data){
        throw new Error('something went wrong!');
      }
      // upon success, remove recipe's id from localStorage
      removeRecipeId(recipeId);
    } catch (err) {
      console.error(JSON.parse(JSON.stringify(err)));
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
    <style type="text/css">
    {`

    body {
      background: radial-gradient(#334e43, #cee4ce); 
    }
    
    

    h2 {
      font-family: 'Catamaran', sans-serif;
      padding: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.6rem;
      font-size: 1.2rem;
      border-top: 3px solid #f1d261;
      border-bottom: 3px solid #f1d261;
      border-width: 10px;
    }

    

    .card-body-custom {
      background: linear-gradient(to bottom, #95a687, #cee4ce)
      
    }

    .card-footer {
      background-color: #f1d261;
    }
    `}
  </style>
  <div>
      <Container>
        <h2 className="text-center" style={{}}>
          {userData.savedRecipes.length
            ? `You have ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:`
            : 'You have no saved recipes!'}
        </h2>
        <div>
          {userData.savedRecipes.map((recipe) => {
            return (
              <SavedRecipeCards
                key={recipe.recipeId}
                recipeId={recipe.recipeId}
                recipeName={recipe.label}
                recipeLink={recipe.url}
                photoLink={recipe.image}
                handleDelete={handleDeleteRecipe}
              />
            );
          })}
        </div>
        
      </Container>
      {/* <ProfileFavorites onDeleteRecipe={handleDeleteRecipe} />
      <ProfileWeek /> */}
    </div>
    </>
    
  );
};

export default SavedRecipes;
