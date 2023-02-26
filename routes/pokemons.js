const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const pokemonController = require("../controllers/pokemonController")

router.get('/', pokemonController.getPokemons);

router.get("/buscar", pokemonController.getPokemonByname);

router.get("/pokedex", pokemonController.getPokemonByPokedex);

router.get("/:id", pokemonController.getPokemonById)

router.post("/atrapar", pokemonController.postPokemon)

module.exports = router;
