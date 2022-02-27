import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      username
      savedRecipes {
        label
        image
        recipeId
        source
        url
        yield
        dietLabels
        healthLabel
        cautions
        ingredients
        calories
        cuisineType
        mealType
        dishType
        days
      }
    }
  }
`;
