let EditProfileCtrl = function($scope, $state, ProfileService){

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);

			$scope.data = currentUser;
		}
	})

	$scope.addProfile = function(user){

		ProfileService.addProfile(user);
	}
};
EditProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];

export default EditProfileCtrl;