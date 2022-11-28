const Libro = require("../models/libro");

const libroCtrl = {};

libroCtrl.getLibros = async (req, res, next) => {
  const libros = await Libro.find();
  res.json(libros);
};

libroCtrl.createLibro = async (req, res, next) => {
  const libro = new Libro({
    nombre: req.body.nombre,
    cantidad: req.body.cantidad,
    autor: req.body.autor,
    editorial: req.body.editorial,
    descripcion: req.body.descripcion,

  });
  await libro.save();
  res.json({ status: "Libro creado" });
};

libroCtrl.getLibro = async (req, res, next) => {
  const { id } = req.params;
  const libro = await Libro.findById(id);
  res.json(libro);
};

libroCtrl.editLibro = async (req, res, next) => {
  const { id } = req.params;
  await Libro.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Libro actualizado" });
};

libroCtrl.deleteLibro = async (req, res, next) => {
  await Libro.findByIdAndRemove(req.params.id);
  res.json({ status: "Libro eliminado" });
};

module.exports = libroCtrl;