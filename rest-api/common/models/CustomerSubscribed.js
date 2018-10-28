'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CustomerSubscribed) {
  Composer.restrictModelMethods(CustomerSubscribed);
};
