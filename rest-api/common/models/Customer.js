'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Customer) {
  Composer.restrictModelMethods(Customer);
};
