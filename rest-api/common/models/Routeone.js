'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Routeone) {
  Composer.restrictModelMethods(Routeone);
};
