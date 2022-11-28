const Usuario = require("../models/user");
const bcrypt = require("bcryptjs");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

usuarioCtrl.getUsuario = async (req, res, next) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  res.json(usuario);
};
/* usuarioCtrl.createUsuario =  async (req, res, next) => {
  const usuario = new Usuario({

    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: hash,
    rol : req.body.rol,
    name: req.body.name,

  });
  await usuario.save();
  res.json({ status: "Usuario creado" });
}; */

usuarioCtrl.editUsuario = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err, message: 'Error Interno pass', code: 101 });
    } else {
      const _id = req.params.id;
      const body = {
        email: req.body.email,
        password: hash,
        name: req.body.name,
        rol: req.body.rol,
      };
      Usuario.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true })
        .exec()
        .then(doc => {
          //res.status(200).json(doc);
          res.status(200).json({
            message: "Usuario actualizado correctamente"
          });


        })
        .catch(err => {
          res.status(500).json({ error: err, });

        });
    }
  });
};






usuarioCtrl.deleteUsuario = async (req, res, next) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario eliminado" });
};

module.exports = usuarioCtrl;