'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(FSCustomerContract) {
  Composer.restrictModelMethods(FSCustomerContract);
};
