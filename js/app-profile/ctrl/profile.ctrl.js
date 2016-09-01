let ProfileCtrl = function($state, $scope, ProfileService){

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			
			$scope.data = currentUser;
		} else {

		}
	})

	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$state', '$scope', 'ProfileService'];

export default ProfileCtrl;