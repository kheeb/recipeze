const router = require('express').Router;
const { getSingleUser, createUser, login } = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

// TODO: Add controller for adding recipe to put
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

module.exports = router;
