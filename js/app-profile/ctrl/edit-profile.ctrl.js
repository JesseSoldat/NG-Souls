let EditProfileCtrl = function($scope, $state, ProfileService){

	$scope.addProfile = function(user){

		ProfileService.addProfile(user);
	}
};
EditProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];

export default EditProfileCtrl;