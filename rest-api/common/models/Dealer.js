'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Dealer) {
  Composer.restrictModelMethods(Dealer);
};
