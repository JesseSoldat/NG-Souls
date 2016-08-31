let LoginCtrl = function($scope, $state, LoginService){

	$scope.login = function(userData){
		
		LoginService.login(userData);

		firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				$state.go('root.dash');
			}
			else {
				console.log('No User Login Function');
			}
		})
	}

	$scope.register = function(userData) {

		LoginService.register(userData);
	}

	$scope.logout = function(){
		firebase.auth().signOut().then(function(){
			console.log('signOut');
			$state.go('root.login');

		}, function(error){
			console.log(error);
		});
	}
};

LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;