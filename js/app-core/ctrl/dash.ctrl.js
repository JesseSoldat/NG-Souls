let DashCtrl = function($firebaseArray, $scope, $state) {

	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			console.log(user.uid);
			
		} else {
			console.log('No User DashCtrl');
			$state.go('root.login');
		}
	});
}
DashCtrl.$inject = ['$firebaseArray', '$scope', '$state'];

export default DashCtrl;