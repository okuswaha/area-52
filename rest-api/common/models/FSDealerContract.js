'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(FSDealerContract) {
  Composer.restrictModelMethods(FSDealerContract);
};
