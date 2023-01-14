const { Router } = require('express');
const { createInfoCar,findAll,search,findOne,updateInfoCar,deleteInfoCar } = require('../controllers/infocar');

const router = Router();

// Crear infocar
router.post( '/createInfoCar',createInfoCar );
// Obtener todos los infocar
router.get( '/findAll',findAll );
// Buscar por title
router.get( '/search',search );
// Obtener un infocar por id
router.get( '/:id',findOne );
// Actualizar un infocar por id
router.put( '/:id',updateInfoCar );
// Eliminar un infocar por id
router.delete( '/:id',deleteInfoCar );
module.exports = router;