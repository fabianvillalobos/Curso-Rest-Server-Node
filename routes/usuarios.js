const { validarCampos } = require('../middlewares/validar-campos')
const { esRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');

const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');


const router = Router();


router.get('/', usuariosGet );

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], usuariosPut );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La constraseña debe tener mínimo 6 caracteres').isLength({min:6}),
    check('password', 'La consteña es requerida').not().isEmpty(),
    check('correo').custom( existeEmail ),
    check('correo', 'El correo no es válido').isEmail(),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRolValido ),
    validarCampos
],usuariosPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;