module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    const VerifyToken = require('../middleware/VerifyToken');

    app.post('/v1/users/register', users.register);
    app.post('/v1/users/login', users.login);
    app.get('/v1/users/logout', VerifyToken, users.logout);
}
