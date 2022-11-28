const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    documento: { type: Number, required: true },
    correo: {
      type: String, required: true, unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    contrasena: { type: String, required: true },
    rol: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Usuario", usuarioSchema);