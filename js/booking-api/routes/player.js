const express = require('express');
const schema = require('../validation/schema/palyer');
const validateRequest = require('../validation/validate');
const {
  getAll,
  get,
  create,
  update,
  remove
} = require('../controllers/player');

const router = express.Router();

router.get('/player', getAll);
router.get('/player/:id', validateRequest(schema.get), get);
router.post('/player', validateRequest(schema.create), create);
router.put('/player/:id', validateRequest(schema.update), update);
router.delete('/player/:id', validateRequest(schema.get), remove);

module.exports = router;