let LayoutCtrl = function($state, $scope){
		firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			
			
		} else {
			$state.go('login');
		}
	});
	$scope.logout = function(){
		firebase.auth().signOut().then(function(){
			$state.go('login');

		}, function(error){
			console.log(error);
		});
	}
};
LayoutCtrl.$inject = ['$state', '$scope'];
export default LayoutCtrl;