'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CustomerReturnsCar) {
  Composer.restrictModelMethods(CustomerReturnsCar);
};
