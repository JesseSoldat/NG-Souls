let LoginCtrl = function($scope, $state, LoginService){

	$scope.login = function(user){
		console.log(user);
	}

	$scope.register = function(user) {
		console.log(user);
	}

	$scope.logout = function(){

	}
};

LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;