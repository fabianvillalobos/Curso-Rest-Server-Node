const Role = require('../models/role');
const Usuario = require('../models/usuario');

// valida si existe Rol en BD
const esRolValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no está en nuestros registros `)
    } 
};

// Verificar si el correo existe
const existeEmail = async (correo = '') =>{
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
        throw new Error(`El correo ${correo} ya existe`)
    }
};

// Valida si existe el ID en la BD
const existeUsuarioPorId = async (id) =>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El ID ${id} no existe en la BD`)
    }
};


module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioPorId
}