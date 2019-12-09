 const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

 router.get('/', controllers.aircraft.get);

 router.get('/:id', controllers.aircraft.getOne);

 router.post('/', auth(), controllers.aircraft.post);

// // router.put('/:id', auth(), controllers.aircraft.put);

// // router.delete('/:id', auth(), controllers.aircraft.delete);

 module.exports = router;