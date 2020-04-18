const models = require('../models');

module.exports = {

  get: (req, res, next) => {
    const limit = +req.query.limit;

    if (limit) {
      models.Aircraft.find().populate('creator').sort({ _id: -1 }).limit(limit)
        .then((aircraft) => res.send(aircraft))
        .catch(next);
      return;
    }

    models.Aircraft.find().populate('creator')
      .then((aircraft) => res.send(aircraft))
      .catch(next);
  },
  getOne: (req, res, next) => {
    const { id } = req.params;

    models.Aircraft.findOne({ _id: id }).populate('creator')
      .then((aircraft) => res.send(aircraft))
      .catch(next);
    return;

  },
  post: (req, res, next) => {
    const { name, imageURL, description, type, countryOfOrigin, topSpeed, capacity, price } = req.body;
    const { _id } = req.user;

    models.Aircraft.create({ name, imageURL, description, type, countryOfOrigin, topSpeed, capacity, price, creator: _id })
      .then((aircraft) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { createdAircraft: aircraft } }),
          models.Aircraft.findOne({ creator: _id })
        ]);
      })
      .then(([modifiedObj, aircraftObj]) => {
        res.send(aircraftObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const { name, imageURL, description, type, countryOfOrigin, topSpeed, capacity, price } = req.body;
    const { id } = req.params;
    const { _id } = req.user;

    models.Aircraft.updateOne({_id: id},{ $set: { name, imageURL, description, type, countryOfOrigin, topSpeed, capacity, price} })
      .then((aircraft) => {
        return Promise.all([
          models.Aircraft.findOne({ creator: _id })
        ]);
      })
      .then(([modifiedObj, aircraftObj]) => {
        res.send(aircraftObj);
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    const { _id } = req.user;
    const { id } = req.params;

    models.Aircraft.deleteOne({_id: id})
      .then((aircraft) => {
        return Promise.all([
          models.User.updateOne({ "createdAircraft": id}, {$pull: {"createdAircraft": id}})
        ]);
      })
      .then(([modifiedObj, aircraftObj]) => {
        res.send(aircraftObj);
      })
      .catch(next);
  },
}