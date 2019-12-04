const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

   // app.use('/api/aircraft', router.aircraft);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. </h1>'))
};