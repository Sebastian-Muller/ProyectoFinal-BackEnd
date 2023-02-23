const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.conect(
            "mongodb+srv://sebamuller13:seba1234@cluster0.pyhnmiu.mongodb.net/test"
        );
        console.log("Conectado a la base de datos...");
    } catch (error) {
        console.log(error.message, `- no se pudo conectar a la base de datos`);
    }
};

module.export = connect;