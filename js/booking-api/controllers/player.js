const business = require('../business/player');

const getAll = async (req, res) => {
  try {
    const player = await business.getAll();
    res.status(200).send(player);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const get = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await business.get(id);
    if (!player) return res.status(404).send();
    res.status(200).send(player);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const create = async (req, res) => {
  try {
    const player = await business.create(req.body);
    res.status(201).send(player);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const update = async (req, res) => {
  try {
    const player = await business.update(req.params.id, req.body);
    if (!player) return res.status(404).send();
    res.status(200).send(player);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const player = await business.remove(id);
    if (!player) return res.status(404).send();
    res.status(200).send({ message: 'Player was successfully deleted' });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
