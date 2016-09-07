let PhotoCtrl = function($scope, ProfileService, $stateParams, $state) {

	//When you refresh the page there will be no params saved
	if ($stateParams.myParam === null) {
		$state.go('root.photos');
	} else {
		let storage = firebase.storage();
		let photoUrl = $stateParams.myParam.url;
		console.log($stateParams.myParam);
		let httpsRef = storage.refFromURL(photoUrl);
		$scope.url = photoUrl;

		$scope.deletePhoto = function(){
			// Delete the file
			httpsRef.delete().then(function() {
			  // File deleted successfully
			  
			}).catch(function(error) {
			  // Uh-oh, an error occurred!
			});
		}
	}
	$scope.goBack = function(state){
		$state.go(state);
	}


};
PhotoCtrl.$inject = ['$scope', 'ProfileService', '$stateParams', '$state'];

export default PhotoCtrl;