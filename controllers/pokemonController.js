const { default: axios } = require('axios');
const { validationResult } = require('express-validator');
const Pokemon = require('../models/Pokemon')


const getPokemons = async (req, res) => {
	const pokemons = await Pokemon.find();
	res
		.status(200)
		.json(pokemons)
};

const getPokemonByPokedex = async (req, res) => {
	const pokemon = await Pokemon.findOne({ pokedex: req.query.pokedex })

	res
		.status(200)
		.json({
			pokemon, msg: 'Ok'
		})
}

const getPokemonByname = async (req, res) => {
	const pokemon = await Pokemon.findOne({ name: req.query.name })

	res
		.status(200)
		.json({
			pokemon, msg: 'Ok'
		})
}

const getPokemonById = async (req, res) => {
	const pokemon = await Pokemon.findById(req.params.id)
	if (pokemon) {
		res
			.status(200)
			.json({
				pokemon, msg: 'Ok'
			})
	} else {
		res
			.status(404)
			.json({
				pokemon: null,
				msg: "El id no es valido."
			})
	}
};

const getPokemonsPA = async (req, res) => {

	try {
		const pokemonsPA = await axios.get(
			"https://pokeapi.co/api/v2/pokemon", 
			{
				headers: { "Accept-Encoding": "gzip, deflate, compress"},
			}
			);
			res.status(200).json({ pokemons: pokemonsPA.data, msg: "Ok" })
	} catch (error) {
		res.status(500).json({
			msg: "Error",
			error: error.msg,
		});
	}

};

const postPokemon = async (req, res) => {
	try {
		const validationError = validationResult(req)


		if (validationError.isEmpty()) {
			const pokemon = new Pokemon(req.body)
			await pokemon.save()

			res
				.status(201)
				.json({
					pokemon,
					msg: `Atrapaste un ${pokemon.name}!`,
					error: null
				})
		} else {
			res
				.status(400)
				.json({
					pokemon: null,
					msg: `Los datos son incorrectos`,
					error: validationError
				})
		}
	} catch (error) {
		res.status(500).json({ pokemon: req.body.name, msg: "Error", error: error.message() })
	}
}

const putPokemon = async (req, res) => {
	try {
		const validationError = validationResult(req)

		if (validationError.isEmpty()) {

			const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body)

			if (pokemon) {
				res
					.status(200)
					.json({
						pokemon: req.body.name,
						msg: "El pokemon ha sido actualizado correctamente."
					})
			} else {
				res
					.status(404)
					.json({
						pokemon: null,
						msg: "El id no es valido."
					})
			}
		}
	} catch (error) {
		res
			.status(500)
			.json({
				pokemon: req.body.name,
				msg: "Error - " + error.message
			})
	}
}

const deletePokemon = async (req, res) => {
	try {
		const pokemon = await Pokemon.findByIdAndDelete(req.params.id)
		if (pokemon) {
			res
				.status(200)
				.json({
					pokemon: req.body.name,
					msg: `Tu pokemon ha sido liberado.`
				})
		} else {
			res
				.status(404)
				.json({
					pokemon: null,
					msg: "El id no es valido."
				})
		}
	} catch (error) {
		res
			.status(500)
			.json({
				pokemon: req.body.name,
				msg: "Error - " + error.message
			})
	}

}

module.exports = { getPokemons, getPokemonByPokedex, getPokemonByname, getPokemonsPA, postPokemon, getPokemonById, putPokemon, deletePokemon };



