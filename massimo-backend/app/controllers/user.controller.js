const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config/jwt.config.js');


exports.register = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Inputs can not be empty"
        });
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (user) return res.status(409).send({
            message: "This user already exists."
        });

        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const userToAdd = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        userToAdd.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the user."
                });
            });

    });
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours (Although, ideal a refresh token...)
        });

        res.status(200).send({ auth: true, token: token });
    });
};

exports.logout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};


