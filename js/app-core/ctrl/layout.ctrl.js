let LayoutCtrl = function($state){
		firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			
			
		} else {
			console.log('No User DashCtrl');
			$state.go('login');
		}
	});
};
LayoutCtrl.$inject = ['$state'];
export default LayoutCtrl;