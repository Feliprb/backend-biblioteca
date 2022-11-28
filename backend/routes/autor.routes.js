const express = require("express");
const router = express.Router();

const autor = require("../controllers/autor.controller");

router.get("/", autor.getAutores);

router.post("/", autor.createAutor);

router.get("/:id", autor.getAutor);

router.put("/:id", autor.editAutor);

router.delete("/:id", autor.deleteAutor);

module.exports = router;