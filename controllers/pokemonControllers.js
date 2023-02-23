const Pokemon = require('../models/Pokemon')


const getPokemons = async (req, res) => {
	const pokemons = await Pokemon.find();
	res.status(200).json(pokemons)
};

module.exports = { getPokemons }



