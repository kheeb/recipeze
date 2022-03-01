import React from "react";
import ProfileFavorites from "../components/ProfileFavorites";
import ProfileWeek from "../components/ProfileWeek";
import Auth from "../utils/auth";
import { useQuery } from '@apollo/client';
import { Container, Card, Button } from 'react-bootstrap';
import { removeRecipeId } from '../utils/localStorage';

import { REMOVE_RECIPE } from '../utils/mutations';
import{GET_ME} from '../utils/queries'
import { useMutation } from '@apollo/client';

const SavedRecipes = () => {
  const {loading,data} = useQuery(GET_ME);
  console.log(data);
  const [removeRecipe] = useMutation(REMOVE_RECIPE);

  const userData = data?.me || [];
console.log(userData);
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
      // upon success, remove book's id from localStorage
      removeRecipeId(recipeId);
    } catch (err) {
      console.error(JSON.parse(JSON.stringify(err)));
    }
    // window.location.reload()
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
       <div fluid className='text-light bg-dark'>
        <Container>
          <h1>My saved recipes!</h1>
        </Container>
      </div>
      <Container>
        <h2>
          {userData.savedRecipes.length
            ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:`
            : 'You have no saved recipes!'}
        </h2>
        <div>
          {userData.savedRecipes.map((recipe) => {
            return (
              <Card key={recipe.recipeId} border='dark'>
                {recipe.image ? <Card.Img src={recipe.image} alt={`The cover for ${recipe.label}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{recipe.label}</Card.Title>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(recipe.recipeId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
      {/* <ProfileFavorites onDeleteRecipe={handleDeleteRecipe} />
      <ProfileWeek /> */}
    </div>
  );
};

export default SavedRecipes;