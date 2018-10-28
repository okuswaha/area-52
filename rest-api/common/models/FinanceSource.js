'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(FinanceSource) {
  Composer.restrictModelMethods(FinanceSource);
};
