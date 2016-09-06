let LoginCtrl = function($scope, $state, LoginService){

	$scope.login = function(userData){
		
		LoginService.login(userData);

		firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				$state.go('root.dash');
			}
			else {
			
			}
		})
	}

	$scope.register = function(userData) {

		LoginService.register(userData);
	}

	
};

LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;