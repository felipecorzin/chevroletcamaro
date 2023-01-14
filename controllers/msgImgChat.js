const { response } = require('express');
const MsgImgChat = require('../models/MsgImgChat');

const createMsgImgChat = (req, res = response) => {
    // Validate request
  if (!req.body.message) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a infocar
  const msgImgChat = new MsgImgChat({
    roomname : req.body.roomname,
    nickname:  req.body.nickname,
    message:   req.body.message,
    img:       req.body.img
  });
  // Save infocar in the database
  MsgImgChat.create( msgImgChat ).then(() => {
      res.json({
          ok: true,
          msgImgChat
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

  MsgImgChat.find(condition)
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
  MsgImgChat.findById(id)
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

const deleteMsgImgChat = async(req, res = response ) => {

    const id = req.params.id;

    MsgImgChat.findByIdAndRemove(id, { useFindAndModify: false })
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
    createMsgImgChat,
    findAll,
    findOne,
    deleteMsgImgChat
}