(function() {
	'use strict';

	angular
		.module('helloworld')
		.directive('userProfile',userProfile);

	function userProfile() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/userProfile/userProfile.html',
			controller: UserProfileController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function UserProfileController ($log, $cookies, userVerification) {
			var vm = this;

			vm.userPoints = "";
			vm.showLoginForm = true; 
			vm.showUserProfile = false;
			vm.isLoading = false;

			vm.btnSubmit = btnSubmit;
			vm.btnLogout = btnLogout;

			if($cookies.get('username') != null) {
				loginSuccess();
			}

			function btnSubmit() {
				vm.isLoading = true;
				userVerification.getUserVerification().then(function(data){
					$cookies.put('username',data.username);
					$cookies.put('points',data.points);
					
					loginSuccess();
					vm.isLoading = false;
				});
			}

			function btnLogout() {
				$cookies.remove('username');
				$cookies.remove('points');
				vm.showLoginForm = !vm.showLoginForm;
				vm.showUserProfile = !vm.showUserProfile;
			}

			function loginSuccess() {
					vm.userName = $cookies.get('username');
					vm.userPoints = $cookies.get('points');
					vm.showLoginForm = !vm.showLoginForm;
					vm.showUserProfile = !vm.showUserProfile;
			}
		}
	}
})();
