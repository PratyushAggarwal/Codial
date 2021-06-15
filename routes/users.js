const { Router } = require('express');
const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.controller');
router.get('/profile',usersController.profile);
router.get('/contact',usersController.contact);
router.get('/sign-up',usersController.SignUp);
router.get('/sign-in',usersController.SignIn);
router.post('/create',usersController.create);
module.exports = router;