'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CustomerPaysSubscriptionFee) {
  Composer.restrictModelMethods(CustomerPaysSubscriptionFee);
};
