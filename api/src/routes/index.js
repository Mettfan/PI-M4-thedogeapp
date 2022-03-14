const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var dogsRouter = require('./DogsRouter/dogs.js')
var dogsTemperamentRouter = require('./TemperamentRouter/temperament.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use( '/dogs', dogsRouter )
router.use( '/temperament', dogsTemperamentRouter )


module.exports = router;
