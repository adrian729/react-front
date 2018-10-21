const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
    // User has already user name and password auth'd
    // Give them a token
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {
    const name = req.body.name;
    const password = req.body.password;

    if (!name || !password) {
        return res.status(422).send({ error: 'You must provide an user name and a password' });
    }

    // See if an user with the given name exists
    User.findOne({ name: name }, function (err, existingUser) {
        if (err) { return next(err); }

        // If exists, return error
        if (existingUser) {
            return res.status(422).send({ error: 'User name is in use' });
        }
        // Else, create and save user record
        const user = new User({
            name: name,
            password: password
        });

        user.save(function (err) {
            if (err) { return next(err); }

            // Respond to request indicating the user was created
            res.json({ token: tokenForUser(user) });
        });
    });
}