const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'Correo es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña es requerida']
    },
    imagen: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

// Sobreescribe methodo que imprime el objecto dejando fuera __v y password
UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ...usuario } = this.toObject(); 
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);