const router = require('express').Router;
const { getSingleUser, createUser, login } = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

module.exports = router;
