const mongoose  = require ("mongoose");

const Schema = mongoose.Schema

const pokemonSchema = new Schema ({
    pokedex:{
        type: Number,
        required: true,
        unique: true        
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true
    }
})


const Pokemon = mongoose.model("Pokemon",pokemonSchema);

module.exports = Pokemon;