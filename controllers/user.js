const { response } = require('express');
const Usuario = require('../models/Usuario');

const findAll = async(req, res = response ) => {

    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Usuario.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

const findOne = async(req, res = response ) => {

    const id = req.params.id;

    Usuario.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });

};

const updateUsuario = async(req, res = response ) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    Usuario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
        } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Tutorial with id=" + id
        });
    });

};

const deleteUsuario = async(req, res = response ) => {

    const id = req.params.id;

    Usuario.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

};

module.exports = {
    findAll,
    findOne,
    updateUsuario,
    deleteUsuario
}