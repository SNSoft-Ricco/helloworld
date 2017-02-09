(function() {
	'use strict';

	angular
	.module('helloworld')
	.service('userVerification',userVerification);

	function userVerification ($log,$http) {
		var apiHost = "https://reqres.in/api/users";

		this.getUserVerification = getUserVerification;

		function getUserVerification () {
			return $http({
				url: apiHost,
				method: "POST",
				data: {
					username: "Ricco",
					email: "ricco@snsoft.my",
					points: "123735773"
				}
			}).then(function(response) { 
				return response.data
			}, function() {
				$log.info('Request Failed');
			})
		}
	}
})();