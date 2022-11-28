const Editorial = require("../models/editorial");

const editorialCtrl = {};

editorialCtrl.getEditoriales = async (req, res, next) => {
  const editoriales = await Editorial.find();
  res.json(editoriales);
};

editorialCtrl.createEditorial = async (req, res, next) => {
  const editorial = new Editorial({
    nombre: req.body.nombre,
    fechaFundacion: req.body.fechaFundacion,
    sedeCentral: req.body.sedeCentral,

  });
  await editorial.save();
  res.json({ status: "Editorial creada" });
};

editorialCtrl.getEditorial = async (req, res, next) => {
  const { id } = req.params;
  const editorial = await Editorial.findById(id);
  res.json(editorial);
};

editorialCtrl.editEditorial = async (req, res, next) => {
  const { id } = req.params;
  await Editorial.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Editorial actualizada" });
};

editorialCtrl.deleteEditorial = async (req, res, next) => {
  await Editorial.findByIdAndRemove(req.params.id);
  res.json({ status: "Editorial eliminada" });
};

module.exports = editorialCtrl;