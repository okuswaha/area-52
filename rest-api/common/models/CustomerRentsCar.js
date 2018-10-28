'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CustomerRentsCar) {
  Composer.restrictModelMethods(CustomerRentsCar);
};
