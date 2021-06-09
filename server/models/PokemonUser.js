import mongoose from 'mongoose';

const requiredString = { type: String, required: true };

const PokemonUserSchema = mongoose.Schema({
  username: requiredString,
  password: requiredString,
  decks: [String],
});

const PokemonUser = mongoose.model('PokemonUser', PokemonUserSchema);

export default PokemonUser;
