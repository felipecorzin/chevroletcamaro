const { response } = require('express');
const MsgChat = require('../models/MsgChat');

const createMsgChat = async(req, res = response ) => {
  // Validate request
  if (!req.body.message) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
  }
  // Create a infocar
  const msgChat = new MsgChat({
    roomname : req.body.roomname,
    nickname:  req.body.nickname,
    message:   req.body.message
  });
  // Save infocar in the database
  MsgChat.create( msgChat ).then(() => {
      res.json({
          ok: true,
          msgChat
      });
  }).catch( err => {
      res.json({
          ok: false,
          err
      });
  });
};

const findAll = async(req, res = response ) => {
  const message = req.query.message;
  var condition = message ? { message: { $regex: new RegExp(message), $options: "i" } } : {};

  MsgChat.find(condition)
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

const deleteMsgChat = async(req, res = response ) => {

    const id = req.params.id;

    MsgChat.findByIdAndRemove(id, { useFindAndModify: false })
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
  createMsgChat,
  findAll,
  deleteMsgChat
}