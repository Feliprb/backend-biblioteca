const mongoose = require("mongoose");
const { Schema } = mongoose;

const autorSchema = new Schema(
  {
    nombre: { type: String, required: true },
    fechaNacimiento: { type: String, required: true },
    nacionalidad: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Autor", autorSchema);