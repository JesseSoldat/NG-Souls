let PhotoCtrl = function($scope, ProfileService, $stateParams, $state, $firebaseObject) {

	//When you refresh the page there will be no params saved
	if ($stateParams.myParam === null) {
		$state.go('root.photos');
	} else {
		//grab the url passed from photos ctrl
		let photoUrl = $stateParams.myParam.url;

		//display the single photo in our view
		$scope.url = photoUrl;


		let storage = firebase.storage();
		
		//used to point to the REAL file in STORAGE
		let httpsRef = storage.refFromURL(photoUrl);

		$scope.deletePhoto = function(){
			//Get the current user object
			let user = firebase.auth().currentUser;

			//Delete the Database REF first----------------------------------
			// Create a reference to the file whose metadata we want to retrieve
			let customMeta = storage.refFromURL(photoUrl);

			// Get metadata properties
			customMeta.getMetadata().then(function(metadata) {

				let metaId = metadata.customMetadata.id //the key to the object that we want to delete example -KR3N89OhedWqtuLSVwT
			
				//point to the object in the array that we want to delete this is in the DATABASE and just holds the URL for the image in STORAGE
				let ref = firebase.database().ref('users/' +user.uid + '/photos/' + metaId);
				
				let obj = $firebaseObject(ref);
				obj.$remove().then(function(ref) {
		  			$state.go('root.photos');
				}, function(error) {
				  console.log("Error:", error);
				});
				// Delete the REAL file from STORAGE
				httpsRef.delete().then(function() {
				  // File deleted successfully

				}).catch(function(error) {
		
				});
		  
			}).catch(function(error) {
			 
			});
		}
	}
	$scope.goBack = function(state){
		$state.go(state);
		//state is 'root.photos'
	}


};
PhotoCtrl.$inject = ['$scope', 'ProfileService', '$stateParams', '$state', '$firebaseObject'];

export default PhotoCtrl;