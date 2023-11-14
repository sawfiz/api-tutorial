const express = require('express');
const router = express.Router();

// const models = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res) => {
  // return res.send('GET HTTP method on user resource');
  // return res.send(Object.values(users));
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  // return res.send(users[req.params.userId]);
  return res.send(req.context.models.users[req.params.userId]);
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

router.put('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

module.exports = router;
