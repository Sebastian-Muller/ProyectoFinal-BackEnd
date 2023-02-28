const Pokemon = require("../models/Pokemon")


const validarPokedex = async (req, res, next) => {
    const pokemon = await Pokemon.findOne({ pokedex: req.body.pokedex })

    if (pokemon) {
        res.status(400).json({
            msg: "El pokemon ya se encuentra registrado en la pokedex"
        })
    } else {
        next();
    }
};

module.exports = validarPokedex;