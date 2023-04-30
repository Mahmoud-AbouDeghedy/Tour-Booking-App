const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const Router = express.Router();

Router.post('/signup', authController.signUp);
Router.post('/login', authController.login);
Router.get('/logout', authController.logout);
Router.post('/forgotPassword', authController.forgotPassword);
Router.patch('/resetPassword/:token', authController.resetPassword);

Router.use(authController.protect);

Router.patch('/updateMyPassword', authController.updatePassword);
Router.get('/me', userController.getMe, userController.getUser);
Router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
Router.delete('/deleteMe', userController.deleteMe);

Router.use(authController.restrictTo('admin'));

Router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

Router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = Router;
