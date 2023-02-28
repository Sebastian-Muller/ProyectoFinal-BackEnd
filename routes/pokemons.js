const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");
const validarPokedex = require('../middlewares/validarPokedex');

router.get('/', pokemonController.getPokemons);

router.get("/buscar", pokemonController.getPokemonByname);

router.get("/pokedex", pokemonController.getPokemonByPokedex);

router.get("/pokemonsPA", pokemonController.getPokemonsPA);

router.get("/:id", pokemonController.getPokemonById);

router.post("/atrapar",
    [
        check("name")
            .not()
            .isEmpty()
            .withMessage("El nombre es obligatorio"),

        check("pokedex")
            .not()
            .isEmpty()
            .withMessage("El numero de pokedex es obligatorio")
            .not()
            .isNumeric()
            .withMessage("Debe ingresar un valor numerico."),

        check("type")
            .not()
            .isEmpty()
            .withMessage("El tipo es obligatorio"),
    ],
    validarPokedex,
    pokemonController.postPokemon);

router.put("/actualizar/:id",
    [
        check("name")
            .not()
            .isEmpty()
            .withMessage("El nombre es obligatorio"),

        check("pokedex")
            .not()
            .isEmpty()
            .withMessage("El numero de pokedex es obligatorio")
            .not()
            .isNumeric()
            .withMessage("Debe ingresar un valor numerico."),

        check("type")
            .not()
            .isEmpty()
            .withMessage("El tipo es obligatorio"),
    ],
    pokemonController.putPokemon);

router.delete("/liberar/:id", pokemonController.deletePokemon);

module.exports = router;
