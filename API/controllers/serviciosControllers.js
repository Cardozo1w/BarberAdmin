const router = require("express").Router();
const { Servicios } = require("../conexion");

router.get("/", async (req, res) => {
  const servicios = await Servicios.findAll();
  res.json(servicios);
});

router.post("/", async (req, res) => {
  const servicio = await Servicios.create(req.body);
  res.json(servicio);
  console.log(req.body);
});

router.put("/:id", async (req, res) => {
  await Servicios.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Se ha modificado" });
});

router.delete("/:id", async (req, res) => {
  await Servicios.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "Se ha borrado el servicio" });
});

module.exports = router;
