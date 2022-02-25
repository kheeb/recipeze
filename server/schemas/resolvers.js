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
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);

      return { token, profile };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return { token, user };
    },
    saveRecipe: async (parent, { recipeToSave }, context) => {
      console.log(recipeToSave);
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedRecipes: recipeToSave } },
          { new: true, runValidators: true }
        );
        console.log(updatedUser);
        return updatedUser;
      } catch (err) {
        console.log(err);
      }
    },
    removeRecipe: async (parent, { recipeId }, context) => {
      if(context.user) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { recipeId: recipe=Id } } },
            { new: true }
        );

        return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
  },
};
module.exports = resolvers;
