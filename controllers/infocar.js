const { response } = require('express');
const InfoCar = require('../models/InfoCar');

const createInfoCar = async(req, res = response ) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a infocar
    const infocar = new InfoCar ({
        title         : req.body.title,
        description   : req.body.description,
        img           : req.body.img
    });
    // Save infocar in the database
    InfoCar.create( infocar ).then(() => {
        res.json({
            ok: true,
            infocar 
        });
    }).catch( err => {
        res.json({
            ok: false,
            err
        });
    });
};

const findAll = async(req, res = response ) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    InfoCar.find(condition)
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

const search = async (req, res = response) => {
  const title = req.query.title;
  const infocar = await InfoCar.findOne({
    title: title
  });
};

const findOne = async(req, res = response ) => {
    const id = req.params.id;

    InfoCar.findById(id)
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

const updateInfoCar = async(req, res = response ) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;
    
    InfoCar.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteInfoCar = async(req, res = response ) => {
    const id = req.params.id;
  
    InfoCar.findByIdAndRemove(id, { useFindAndModify: false })
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
    createInfoCar,
    findAll,
    search,
    findOne,
    updateInfoCar,
    deleteInfoCar
}