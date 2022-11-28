const express = require("express");
const router = express.Router();

const prestamo = require("../controllers/prestamo.controller");

router.get("/", prestamo.getPrestamos);

router.post("/", prestamo.createPrestamo);

router.get("/:id", prestamo.getPrestamo);

router.put("/:id", prestamo.editPrestamo);

router.delete("/:id", prestamo.deletePrestamo);

module.exports = router;