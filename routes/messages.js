const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// const models = require('../models');

router.get('/', (req, res) => {
  // return res.send(Object.values(messages));
  return res.send(Object.values(req.context.models.messages));
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    // userId: req.me.id,
    userId: req.context.me.id,
  };

  // messages[id] = message;
  req.context.models.messages[id] = message;

  return res.send(message);
});

router.get('/:messageId', (req, res) => {
  // return res.send(messages[req.params.messageId]);
  return res.send(req.context.models.messages[req.params.messageId]);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
    // } = messages;
  } = req.context.models.messages;

  // messages = otherMessages;
  req.context.models.messages = otherMessages;

  return res.send(message);
});

module.exports = router;
