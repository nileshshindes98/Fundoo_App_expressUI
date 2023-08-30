import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to login user
router.post('/login',userController.loginUser);

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to user forget password
router.post('/forget',userController.forgetPassword);

export default router;
