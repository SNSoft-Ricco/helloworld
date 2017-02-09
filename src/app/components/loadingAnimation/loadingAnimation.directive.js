(function() {
	'use strict';

	angular
		.module('helloworld')
		.directive('loadingAnimation',loadingAnimation);

	function loadingAnimation() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/loadingAnimation/loadingAnimation.html',
			controller: loadingAnimationController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function loadingAnimationController ($log, $cookies, userVerification) {
			var vm = this;

			// vm.userPoints = "";
			// vm.showLoginForm = true; 
			// vm.showUserProfile = false;
			// vm.isLoading = false;

			// vm.btnSubmit = btnSubmit;
			// vm.btnLogout = btnLogout;

			// if($cookies.get('username') != null) {
			// 	loginSuccess();
			// }

			// function btnSubmit() {
			// 	vm.isLoading = true;
			// 	userVerification.getUserVerification().then(function(data){
			// 		$cookies.put('username',data.username);
			// 		$cookies.put('points',data.points);
					
			// 		loginSuccess();
			// 		vm.isLoading = false;
			// 	});
			// }

			// function btnLogout() {
			// 	$cookies.remove('username');
			// 	$cookies.remove('points');
			// 	vm.showLoginForm = !vm.showLoginForm;
			// 	vm.showUserProfile = !vm.showUserProfile;
			// }

			// function loginSuccess() {
			// 		vm.userName = $cookies.get('username');
			// 		vm.userPoints = $cookies.get('points');
			// 		vm.showLoginForm = !vm.showLoginForm;
			// 		vm.showUserProfile = !vm.showUserProfile;
			// }
		}
	}
})();
