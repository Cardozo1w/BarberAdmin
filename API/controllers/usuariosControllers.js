const router = require("express").Router();
const bcryp = require("bcryptjs");
const { Usuarios } = require("../conexion");
const { check, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }
    req.body.password = bcryp.hashSync(req.body.password, 10);
    const user = await Usuarios.create(req.body);
    res.json(user);
  }
);

router.post("/login", async (req, res) => {
  const user = await Usuarios.findOne({ where: { email: req.body.email } });

  if (user) {
    const pass = bcryp.compareSync(req.body.password, user.password);
    if (pass) {

        res.json({success: 'Token'});
    } else {
      res.json({ error: "Error en usuario y/o password" });
    }
  } else {
    res.json({ error: "Error en usuario y/o password" });
  }
});

module.exports = router;
