(function() {
  'use strict';

  angular
    .module('helloworld')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
