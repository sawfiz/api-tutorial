const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

// export default router;
module.exports = router;
