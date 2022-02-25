const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedRecipes: [Recipe]
  }
  type Recipe {
    label: [String]
    image: String
    recipeId: String!
    ingredients:[Ingredient]
  }
  type Ingredient{
    text:String!
    quantity:Int,
    measure:String

  }

  type Auth {
    token: ID!
    user: User
  }
    input RecipeInput{
      label: [String]
    image: String
    recipeId: ID!
    ingredients:[IngredientInput]
  }
  input IngredientInput{
    text:String!
    quantity:Int,
    measure:String
  }
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
   
    saveRecipe(
    recipeToSave: RecipeInput!):User
    removeRecipe(recipeId: String): User
  }

`;

module.exports = typeDefs;
