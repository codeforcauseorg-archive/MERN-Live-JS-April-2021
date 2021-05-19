const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');
const { admin } = require('../utils/admin');

const auth =
  (...requiredRights) =>
  async (req, res, next) => {
    if (req.token) {
      console.log(req.token);
      let user = await admin.auth().ve(req.token);
      if (user.uid) {
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  };

module.exports = auth;
