let LoginCtrl = function($scope, $state, LoginService){

	$scope.login = function(user){
		console.log(user);
		LoginService.login(user);
	}

	$scope.register = function(user) {
		console.log(user);
		LoginService.register(user);
	}

	$scope.logout = function(){

	}
};

LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;