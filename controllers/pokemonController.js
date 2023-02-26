const Pokemon = require('../models/Pokemon')


const getPokemons = async (req, res) => {
	const pokemons = await Pokemon.find();
	res.status(200).json(pokemons)
};

const getPokemonByPokedex = async (req, res) => {
	const pokemon = await  Pokemon.findOne({pokedex: req.query.pokedex})

	res.status(200).json({pokemon, msg: 'Ok'})
}

const getPokemonByname = async (req, res) => {
	const pokemon = await  Pokemon.findOne({name: req.query.name})

	res.status(200).json({pokemon, msg: 'Ok'})
}

const postPokemon = async (req, res) => {
	const pokemon = new Pokemon(req.body)
	await pokemon.save()
	
	res.status(201).json({pokemon, msg: `Atrapaste un ${pokemon.name}!`})
}

const getPokemonById  = async (req, res) => {
	const pokemon = await Pokemon.findById(req.params.id)

	res.status(200).json({pokemon, msg: 'Ok'})
}

module.exports = { getPokemons, getPokemonByPokedex, getPokemonByname, postPokemon, getPokemonById };



