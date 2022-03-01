const { User,  } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("recipes");
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate("recipes");
    },
  
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("recipes");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return { token, user };
    },
    saveRecipe: async (parent, { recipe }, context) => {
      console.log(recipe);
      try {
        const updatedUser = await User.findOneAndUpdate(
          // { _id: context.user._id },
          // For Testing
          { _id:"621846e1207564050604831a" },

          { $push: { savedRecipes: recipe } },
          { new: true, runValidators: true }
        );
        console.log(updatedUser);
        return updatedUser;
      } catch (err) {
        console.log(err);
      }
    },
    removeRecipe: async (parent, { recipeId }, context) => {
      console.log(context.user)
      if(context.user) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedRecipes: { recipeId: recipeId } } },
            { new: true }
        );

        return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
  },
  // updateDay: async (parent,{day,mealTimr},context)=>{

  // }
};
module.exports = resolvers;
