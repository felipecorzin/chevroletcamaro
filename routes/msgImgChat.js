const { Router } = require('express');
const { createMsgImgChat,findAll,findOne,deleteMsgImgChat } = require('../controllers/msgImgChat');

const router = Router();
/*----- MSGIMGCHAT -----*/

// Crear msgImgChat
router.post('/createMsgImgChat',createMsgImgChat);
// Obtener todos los msgImgChat
router.get( '/findAll',findAll );
// Obtener un msgImgChat por id
router.get( '/:id',findOne );
// Eliminar un msgImgChat por id
router.delete( '/:id',deleteMsgImgChat );

module.exports = router;