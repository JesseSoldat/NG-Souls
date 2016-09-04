let ProfileCtrl = function($state, $scope, ProfileService){

	let currentUser;



	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			$scope.data = currentUser;
			$scope.haveAvatar = true;

		
			let avatarData = ProfileService.getAvatar(user);

			
			avatarData.$loaded().then(function(){
				$scope.avatar = avatarData[0].$value;
				console.log($scope.avatar);
			});

				

			
			//Get Avatar
			// let storage = firebase.storage();


			// let avatarRef = storage.ref(user.uid+'/avatar/avatar.jpg');

			// let url = avatarRef.getDownloadURL().then(function(url) {
			
	 	// 		$scope.avatar = url;
	 	// 		$scope.haveAvatar = true;
			// }).catch(function(error) {
			//   switch (error.code) {
			//     case 'storage/object_not_found':
			//       // File doesn't exist
			//       break;
			//     case 'storage/unauthorized':
			//       // User doesn't have permission to access the object
			//       break;
			//     case 'storage/canceled':
			//       // User canceled the upload
			//       break;
			//     case 'storage/unknown':
			//       // Unknown error occurred, inspect the server response
			//       break;
			//   }
			// });
			//-----------------------------------
			
		} else {

		}
	});

	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$state', '$scope', 'ProfileService'];

export default ProfileCtrl;