'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(FSAddsCarToDealerInventory) {
  Composer.restrictModelMethods(FSAddsCarToDealerInventory);
};
