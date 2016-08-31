let ProfileCtrl = function($state, $scope){

	$scope.editProfile = function(){
		$state.go('root.editProfile');
	}
}
ProfileCtrl.$inject = ['$state', '$scope'];

export default ProfileCtrl;