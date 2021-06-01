const express = require('express');

const router = express.Router();
const homeController= require('../controllers/home_controller');

console.log(`express router is working`);

router.get('/',homeController.home); 

module.exports = router;