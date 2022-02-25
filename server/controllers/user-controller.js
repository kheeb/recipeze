const { User, Recipe } = require('../models');

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // TODO: Change params to user once insomnia testing is complete
  async saveRecipe({ params, body }, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        // TODO: Change params to user once insomnia testing is complete
        { _id: params.id },
        { $addToSet: { savedRecipes: body } },
        { new: true, runValidators: true }
      );

      (!updatedUser)
        ? res.status(404).json({ message: "No user found with this id." })
        : res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }
};
