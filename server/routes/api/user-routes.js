const router = require('express').Router;
const { getSingleUser, createUser, login, saveRecipe } = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

// TODO: FOR TESTING ONLY, move to home route in put once insomnia testing is complete
router.route('/:id').put(saveRecipe);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
