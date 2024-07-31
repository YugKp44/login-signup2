//const { sign } = require('jsonwebtoken');
const expess=require('express');
const app = expess();
const router =require( 'express').Router(); //iammporting express and creating a new instance of it called app then we are using the Router method to create an instance of that class which is basically just a function that returns another function so when you call this function it will return another function. So what happens here is, whenever you make a request for any route in your application, express will check if there's expess.Router();

const {signupValidation} = require('../Middleware/AuthValidation');
const {signup} = require('../Controller/AuthController');
//const loginValidation = require('../Middleware/AuthValidation');
//const login = require('../Controller/Authcontroller');

router.post('/signup',signupValidation,signup);
module.exports = router;

//router.post('/login',loginValidation,login);

