const { Router } = require('express');
const { createMsgChat,findAll,deleteMsgChat } = require('../controllers/msgChat');

const router = Router();

/*----- MSGCHAT -----*/
// Crear msgChat
router.post('/createMsgChat',createMsgChat);
// Obtener todos los msgChat
router.get( '/findAll',findAll );
// Eliminar un msgChat por id
router.delete( '/:id',deleteMsgChat );

module.exports = router;