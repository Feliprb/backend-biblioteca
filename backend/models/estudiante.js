const mongoose = require("mongoose");
const { Schema } = mongoose;

const estudianteSchema = new Schema(
  {
    tipoIdentificacion: { type: String, required: true },
    nroIdentificacion: { type: Number, required: true },
    nombre: { type: String, required: true },
    celular: { type: Number, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Estudiante", estudianteSchema);