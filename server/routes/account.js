import express from 'express';

import {
  getAllUsers,
  registerUser,
  loginUser,
  editUsername,
} from '../controllers/account.js';

const router = express.Router();

// list all users

router.get('/', getAllUsers);

// create a user

router.post('/register', registerUser);

// login

router.post('/login', loginUser);

// edit username

router.post('/editusername', editUsername);

export default router;
