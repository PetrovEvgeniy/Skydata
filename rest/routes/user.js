const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.user.get);

router.get('/getOne', auth(), controllers.user.getOne);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);

module.exports = router;