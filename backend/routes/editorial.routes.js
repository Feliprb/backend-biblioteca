const express = require("express");
const router = express.Router();

const editorial = require("../controllers/editorial.controller");

router.get("/", editorial.getEditoriales);

router.post("/", editorial.createEditorial);

router.get("/:id", editorial.getEditorial);

router.put("/:id", editorial.editEditorial);

router.delete("/:id", editorial.deleteEditorial);

module.exports = router;