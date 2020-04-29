const model = require('../models/player');

const getAll = async () => {
  const players = await model.find({});
  return players;
};

const get = async (id) => {
  const player = await model.findById(id);
  return player;
};

const create = async (data) => {
  const player = model.create(data);
  return player;
};

const update = async (id, data) => {
  const player = await model.findByIdAndUpdate(id, data);
  return player;
};

const remove = async (id) => {
  const player = await model.findByIdAndDelete(id);
  return player;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
