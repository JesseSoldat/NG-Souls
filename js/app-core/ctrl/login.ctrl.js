let LoginCtrl = function($scope, $state, LoginService){
	firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				$state.go('root.dash');
			}
			else {
			
			}
		});

	$scope.login = function(userData){
		
		LoginService.login(userData);

		firebase.auth().onAuthStateChanged(function(user) {
			if(user){
				$state.go('root.dash');
			}
			else {
			
			}
		});
	}

	$scope.register = function(userData) {
		
		LoginService.register(userData);
	}

	$scope.facebookLogin = function(){
		let provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  console.log(result);
		  let token = result.credential.accessToken;
		  // The signed-in user info.
		  let user = result.user;
		
		}).catch(function(error) {
		  let errorCode = error.code;
		  let errorMessage = error.message;
		  // The email of the user's account used.
		  let email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  let credential = error.credential;
		  // ...
		});
	}//facebookLogin

	
};

LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

export default LoginCtrl;