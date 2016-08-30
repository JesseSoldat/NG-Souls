let LoginService = function(){
	this.login = login;
	this.register = register;

	function login(user){
		firebase.auth().signInWithEmailAndPassword(user.logEmail, user.logPass).catch(function(error) {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorMessage);
		});
	};

	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.regEmail, user.regPass).catch(function(error) {
				var errorCode = error.code;
	  			var errorMessage = error.message;
	 			console.log(errorMessage);
		});
	}
};
LoginService.$inject = [];

export default LoginService;