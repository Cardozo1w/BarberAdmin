const router = require('express').Router();
const bcryp = require('bcryptjs');
const {Usuarios} = require('../conexion');

router.post('/register', async (req, res) => {


req.body.password = bcryp.hashSync(req.body.password, 10);
const user = await Usuarios.create(req.body);
res.json(user);

})


module.exports = router;