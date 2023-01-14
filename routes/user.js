const { Router } = require('express');
const { findAll,findOne,updateUsuario,deleteUsuario } = require('../controllers/user');

const router = Router();

// Obtener todos los usuarios
router.get( '/findAll',findAll );
// Obtener un usuario por id
router.get( '/:id',findOne );
// Actualizar un usuario por id
router.put( '/:id',updateUsuario );
// Eliminar un usuario por id
router.delete( '/:id',deleteUsuario );
module.exports = router;