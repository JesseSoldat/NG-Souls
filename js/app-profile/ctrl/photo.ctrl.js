let PhotoCtrl = function($scope, ProfileService, $stateParams, $state, $firebaseObject) {

	//When you refresh the page there will be no params saved
	if ($stateParams.myParam === null) {
		$state.go('root.photos');
	} else {
		

		let storage = firebase.storage();
		let photoUrl = $stateParams.myParam.url;

		let httpsRef = storage.refFromURL(photoUrl);
		$scope.url = photoUrl;

		$scope.deletePhoto = function(){
			let user = firebase.auth().currentUser;

			//Delete the Database REF first
			// Create a reference to the file whose metadata we want to retrieve
			var customMeta = storage.refFromURL(photoUrl);

			// Get metadata properties
			customMeta.getMetadata().then(function(metadata) {

				let metaId = metadata.customMetadata.id
		

				let ref = firebase.database().ref('users/' +user.uid + '/photos/' + metaId);
				let tempUrl = 'users/' +user.uid + '/photos/' + metaId;
				
				
				let obj = $firebaseObject(ref);
				obj.$remove().then(function(ref) {
		  			$state.go('root.photos');
				}, function(error) {
				  console.log("Error:", error);
				});
			// Delete the file from STORAGE
			httpsRef.delete().then(function() {
			  // File deleted successfully

			}).catch(function(error) {
			  // Uh-oh, an error occurred!
			});
			
			  
			}).catch(function(error) {
			  // Uh-oh, an error occurred!
			});
		}
	}
	$scope.goBack = function(state){
		$state.go(state);
	}


};
PhotoCtrl.$inject = ['$scope', 'ProfileService', '$stateParams', '$state', '$firebaseObject'];

export default PhotoCtrl;