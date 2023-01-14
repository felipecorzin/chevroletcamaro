const { response } = require('express');
const Evento = require('../models/Evento');

const createEvent = async(req, res = response ) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Evento
    const evento = new Evento ({
        title : req.body.title,
        desc  : req.body.desc,
        start   : req.body.start,
        end   : req.body.end,
        allDay   : req.body.allDay,
    });
    // Save Evento in the database
    Evento.create( evento ).then(() => {
        res.json({
            ok: true,
            evento 
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

    Evento.find(condition)
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

    Evento.findById(id)
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

const updateEvent = async(req, res = response ) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;
    
    Evento.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteEvent = async(req, res = response ) => {
    const id = req.params.id;
  
    Evento.findByIdAndRemove(id, { useFindAndModify: false })
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
    createEvent,
    findAll,
    findOne,
    updateEvent,
    deleteEvent
}