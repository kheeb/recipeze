const {Schema} = require('mongoose')
const ingredientSchema = require('./Ingredient')
const recipeSchema = new Schema({
    label:{
        type: String,
        required: true,
      },
    image:String,
    recipeId:{
        type: String,
        required: true,
      },
      ingredients:[ingredientSchema]
})


module.export = recipeSchema