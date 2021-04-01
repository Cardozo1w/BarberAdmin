const router = require('express').Router();


const serviciosRouter = require('../controllers/serviciosControllers');
const usuariosRouter = require('../controllers/usuariosControllers');

router.use('/servicios', serviciosRouter);
router.use('/usuarios', usuariosRouter);



module.exports = router;