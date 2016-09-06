let ProfileCtrl = function($state, $scope, ProfileService){

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);

			currentUser.$loaded().then(function(){
				if(currentUser.length > 0){
					$scope.data = currentUser;
					$scope.haveBio = true;
				} else {

				}

			})

			let avatarData = ProfileService.getAvatar(user);

			
			avatarData.$loaded().then(function(){
				
				if(avatarData.length > 0){
					$scope.avatar = avatarData[0].$value;
					$scope.haveAvatar = true;

				} else {
					$scope.noAvatar = true;
				}

			});	
		} else {

		}
	});

	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$state', '$scope', 'ProfileService'];

export default ProfileCtrl;