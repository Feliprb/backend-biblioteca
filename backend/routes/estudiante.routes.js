const express = require("express");
const router = express.Router();

const estudiante = require("../controllers/estudiante.controller");

router.get("/", estudiante.getEstudiantes);

router.post("/", estudiante.createEstudiante);

router.get("/:id", estudiante.getEstudiante);

router.put("/:id", estudiante.editEstudiante);

router.delete("/:id", estudiante.deleteEstudiante);

module.exports = router;