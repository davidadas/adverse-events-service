const config = require('config');

const authentication = config.get('authentication');
const jwt = require('express-jwt');

module.exports = jwt({ secret: authentication.secret });
