const Autor = require("../models/autor");

const autorCtrl = {};

autorCtrl.getAutores = async (req, res, next) => {
  const autores = await Autor.find();
  res.json(autores);
};

autorCtrl.createAutor = async (req, res, next) => {
  const autor = new Autor({
    nombre: req.body.nombre,
    fechaNacimiento: req.body.fechaNacimiento,
    nacionalidad: req.body.nacionalidad,

  });
  await autor.save();
  res.json({ status: "Autor creado" });
};

autorCtrl.getAutor = async (req, res, next) => {
  const { id } = req.params;
  const autor = await Autor.findById(id);
  res.json(autor);
};

autorCtrl.editAutor = async (req, res, next) => {
  const { id } = req.params;
  await Autor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Autor actualizado" });
};

autorCtrl.deleteAutor = async (req, res, next) => {
  await Autor.findByIdAndRemove(req.params.id);
  res.json({ status: "Autor eliminado" });
};

module.exports = autorCtrl;