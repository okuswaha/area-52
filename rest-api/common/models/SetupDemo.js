'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(SetupDemo) {
  Composer.restrictModelMethods(SetupDemo);
};
