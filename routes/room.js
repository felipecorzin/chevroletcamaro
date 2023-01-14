const { Router } = require('express');
const { createRoom,findAllRoom,findOneRoom,deleteRoom } = require('../controllers/room');
const router = Router();

/* --- ROOM --- */
// Crear room
router.post( '/createRoom',createRoom );

// Obtener todos los room
router.get( '/findAllRoom',findAllRoom );

// Obtener un room por id
router.get( '/:id',findOneRoom );

// Eliminar un room por id
router.delete( '/:id',deleteRoom );

module.exports = router;