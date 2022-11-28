const Prestamo = require("../models/prestamo");

const prestamoCtrl = {};

prestamoCtrl.getPrestamos = async (req, res, next) => {
  const prestamos = await Prestamo.find();
  res.json(prestamos);
};

prestamoCtrl.createPrestamo = async (req, res, next) => {
  const prestamo = new Prestamo({
    nomLibro: req.body.nomLibro,
    nomEstudiante: req.body.nomEstudiante,
    fechaPrestamo: req.body.fechaPrestamo,
    fechaDevolucion: req.body.fechaDevolucion,
    cantidad: req.body.cantidad,
    observacion: req.body.observacion,

  });
  await prestamo.save();
  res.json({ status: "Prestamo creado" });
};

prestamoCtrl.getPrestamo = async (req, res, next) => {
  const { id } = req.params;
  const prestamo = await Prestamo.findById(id);
  res.json(prestamo);
};

prestamoCtrl.editPrestamo = async (req, res, next) => {
  const { id } = req.params;
  await Prestamo.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Prestamo actualizado" });
};

prestamoCtrl.deletePrestamo = async (req, res, next) => {
  await Prestamo.findByIdAndRemove(req.params.id);
  res.json({ status: "Prestamo eliminado" });
};

module.exports = prestamoCtrl;