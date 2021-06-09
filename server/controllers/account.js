import PokemonUser from '../models/PokemonUser.js';
import Joi from '@hapi/joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// validation

const schema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export const getAllUsers = (req, res) => {
  res.send('This is user home :)');
};

// --------- register user --------- //

export const registerUser = async (req, res) => {
  const validate = schema.validate(req.body);

  // check if user exists

  const usernameExists = await PokemonUser.findOne({
    username: req.body.username,
  });

  if (usernameExists) return res.status(400).send('Username Already Exists');

  // hash password

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  //create new user

  const user = new PokemonUser({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();

    res.status(200).send('Account Created');

    console.log('Account Created');
  } catch (error) {
    res.status(400).send('There has been an error');

    console.log('There has been an error');
  }
};

// --------- login user --------- //

export const loginUser = async (req, res) => {
  const usernameExists = await PokemonUser.findOne({
    username: req.body.username,
  });

  if (!usernameExists) return res.status(400).send('Username is wrong!');

  const validPassword = await bcrypt.compare(
    req.body.password,
    usernameExists.password
  );

  if (!validPassword) return res.status(400).send('Password is wrong!');

  // create and assign a web token

  const token = jwt.sign({ _id: PokemonUser._id }, process.env.TOKEN_SECRET);

  res.json({ auth: true, token: token, userInformation: usernameExists });
  // res.header('auth-token', token).send(token);
};

export const editUsername = async (req, res) => {
  // needs to check if username exists before changing :)

  await PokemonUser.findOneAndUpdate(
    { username: 'hayley1234' },
    { username: 'blahem' }
  );

  res.send('changed username :)');
};
