const router = require("express").Router();

const { Servicios } = require("../conexion");

router.get("/", async (req, res) => {
  const servicios = await Servicios.findAll();
  res.json(servicios);
});


router.post("/", async (req, res) => {
    
    const servicio = await Servicios.create(req.body);
    res.json(servicio);
  });

module.exports = router;
