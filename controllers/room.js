const { response } = require('express');
const Room = require('../models/Room');

/* --- ROOM --- */
const createRoom = async(req, res = response ) => {
    // Validate request
    if (!req.body.roomname) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a infocar
    const room = new Room({
      roomname   : req.body.roomname,
    });
    // Save infocar in the database
    Room.create( room ).then(() => {
        res.json({
            ok: true,
            room 
        });
    }).catch( err => {
        res.json({
            ok: false,
            err
        });
    });
};

const findAllRoom = async(req, res = response ) => {
    const roomname = req.query.roomname;
    var condition = roomname ? { roomname: { $regex: new RegExp(roomname), $options: "i" } } : {};

    Room.find(condition)
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

const findOneRoom = async(req, res = response ) => {
    const id = req.params.id;

    Room.findById(id)
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

const deleteRoom = async(req, res = response ) => {
    const id = req.params.id;
  
    Room.findByIdAndRemove(id, { useFindAndModify: false })
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
    createRoom,
    findAllRoom,
    findOneRoom,
    deleteRoom
}