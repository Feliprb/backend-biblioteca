const Estudiante = require("../models/estudiante");

const estudianteCtrl = {};

estudianteCtrl.getEstudiantes = async (req, res, next) => {
  const estudiantes = await Estudiante.find();
  res.json(estudiantes);
};

estudianteCtrl.createEstudiante = async (req, res, next) => {
  const estudiante = new Estudiante({

    tipoIdentificacion: req.body.tipoIdentificacion,
    nroIdentificacion: req.body.nroIdentificacion,
    nombre: req.body.nombre,
    celular: req.body.celular,

  });
  await estudiante.save();
  res.json({ status: "Estudiante creado" });
};

estudianteCtrl.getEstudiante = async (req, res, next) => {
  const { id } = req.params;
  const estudiante = await Estudiante.findById(id);
  res.json(estudiante);
};

estudianteCtrl.editEstudiante = async (req, res, next) => {
  const { id } = req.params;
  await Estudiante.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Estudiante actualizado" });
};

estudianteCtrl.deleteEstudiante = async (req, res, next) => {
  await Estudiante.findByIdAndRemove(req.params.id);
  res.json({ status: "Estudiante eliminado" });
};

module.exports = estudianteCtrl;