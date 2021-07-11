const express = require('express');

const router = express.Router();
const homeController= require('../controllers/home_controller');

console.log(`express router is working`);

router.get('/',homeController.home);
router.get('/newacc',homeController.createacc); 
router.use('/users',require('./users'));
router.use('/posts',require('./posts')); 
router.use('/comments',require('./comments'));

module.exports = router;