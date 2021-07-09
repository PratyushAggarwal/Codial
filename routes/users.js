const express = require('express');
const router = express.Router();
const passport = require('passport');


const usersController = require('../controllers/users_controller');
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/contact',usersController.contact);
router.get('/sign-up',usersController.SignUp);
router.get('/sign-in',usersController.SignIn);
router.post('/create',usersController.create);
router.get('/sign-out',usersController.destroy_session);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),usersController.create_sessions);
module.exports = router;