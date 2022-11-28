const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = 'LHpT9jC$r9I?*#TFve*-35c2mx$1m%1R&E9v&frloPTy&/jhL';

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  const { email } = req.body;
  User.find({ email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: `El correo ${email} se encuentra registrado`
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err, message: 'Error Interno', code: 101 });
          } else {



            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              rol: req.body.rol,
              name: req.body.name,
            });
            user
              .save()
              .then(result => {
                res.status(201).json({
                  message: "Usuario creado correctamente, porfavor inicie sesión"

                });
              })
              .catch(err => {
                res.status(500).json({ error: err, message: 'Error Interno', code: 102 });
              });
          }
        });
      }
    });
};

exports.loginUser = (req, res, next) => {
  const { email } = req.body;
  User.find({ email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(404).json({
          message: `El correo ${email} no se encuentra registrado`
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        console.log(user[0].password);
        if (err) {
          return res.status(500).json({
            message: "Error Interno, en la validación de la contraseña"
          });
        }
        if (result) {
          const payload = {
            email: user[0].email,
            id: user[0]._id,
            name: user[0].name,
            rol: user[0].rol
          };
          const expiresIn = "36h";

          const token = jwt.sign(
            payload,
            SECRET_KEY,
            { expiresIn: expiresIn }
          );
          const dataUser = {
            name: user[0].name,
            email: user[0].email,
            token: token,
            expiresIn: expiresIn
          }

          return res.status(200).json({
            //dataUser:dataUser,
            token: token
            //accessToken:accessToken
          });
        }
        res.status(404).json({
          message: "La contraseña ingresada es incorrecta"
        });
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error Interno',
        error: err,
        code: 201
      });
    });
};
