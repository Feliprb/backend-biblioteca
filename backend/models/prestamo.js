const mongoose = require("mongoose");
const { Schema } = mongoose;

const prestamoSchema = new Schema(
  {
    nomLibro: { type: String, required: true },
    nomEstudiante: { type: String, required: true },
    fechaPrestamo: { type: String, required: true },
    fechaDevolucion: { type: String, required: true },
    cantidad: { type: Number, required: true },
    observacion: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Prestamo", prestamoSchema);