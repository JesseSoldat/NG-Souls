let PhotoCtrl = function($scope, ProfileService, $stateParams, $state) {

	//When you refresh the page there will be no params saved
	if ($stateParams.myParam === null) {
		$state.go('root.photos');
	} else {
		let photoUrl = $stateParams.myParam.url;
	
		$scope.url = photoUrl;

		$scope.deletePhoto = function(){
			console.log('deleted: ' + photoUrl);
		}
	}


};
PhotoCtrl.$inject = ['$scope', 'ProfileService', '$stateParams', '$state'];

export default PhotoCtrl;