var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var config = require('../../config/database');
var validateJwt = expressJwt({ secret: config.secret });


exports.isAuthenticated = function () {
    return compose()
      .use(validateJwt)
      .use(function (req, res, next) {
        next();
      });
  };


exports.signToken = function (obj) {
    return jwt.sign(
      obj,
      config.secret,
      { expiresIn: 60 * 60 * 5 }
    );
  };