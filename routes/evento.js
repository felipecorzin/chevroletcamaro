const { Router } = require('express');
const { createEvent,findAll,findOne,
    updateEvent,deleteEvent } = require('../controllers/evento');

const router = Router();

// Crear infocar
router.post( '/createEvent',createEvent );
// Obtener todos los infocar
router.get( '/findAll',findAll );
// Obtener un infocar por id
router.get( '/:id',findOne );
// Actualizar un infocar por id
router.put( '/:id',updateEvent );
// Eliminar un infocar por id
router.delete( '/:id',deleteEvent );
module.exports = router;