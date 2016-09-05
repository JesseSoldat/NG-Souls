let PhotoCtrl = function($scope, ProfileService, $stateParams, $state) {

	if ($stateParams.myParam === null) {
		$state.go('root.photos');
	} else {
		let photoUrl = $stateParams.myParam.url;
	
		$scope.url = photoUrl;

	}

};
PhotoCtrl.$inject = ['$scope', 'ProfileService', '$stateParams', '$state'];

export default PhotoCtrl;