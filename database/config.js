const mongoose = require('mongoose');

const dbConn = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al concectar a la base de datos')
    }

}

module.exports = {
    dbConn
}