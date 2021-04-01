const router = require('express').Router();


const serviciosRouter = require('../controllers/serviciosControllers');

router.use('/servicios', serviciosRouter);



module.exports = router;