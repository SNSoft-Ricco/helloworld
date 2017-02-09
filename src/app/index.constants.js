/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('helloworld')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
