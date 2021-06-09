import PokemonUser from '../models/PokemonUser.js';

export const createDeck = async (req, res) => {
  res.send('send');
};

export const addCard = (req, res) => {
  res.send('you have added a card :)');
};

export const removeCard = (req, res) => {
  res.send('you have removed a card :)');
};
