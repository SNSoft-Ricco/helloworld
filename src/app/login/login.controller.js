(function() {
	'use strict';

	angular
		.module('helloworld')
		.controller('LoginController',LoginController);

	function LoginController() {
		var vm = this;

		vm.headerText = "Welcome Back!";
		vm.login = login;
		vm.signup = signup;

		function login() {
			vm.headerText = "Logging In..";
		}

		function signup() {
			vm.headerText = "Signing up..";
		}
	}


}



	)();