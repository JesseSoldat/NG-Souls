let DashCtrl = function($firebaseArray, $scope, $state, DashService) {
 
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			let getBackground = DashService.getBackground(user);

			getBackground.$loaded().then(function(){
				if (getBackground.length > 0) {
					let url = getBackground[0].$value;
					let img = document.querySelector('#dashBackground');
					img.style.backgroundImage = 'url('+url+')';
					
				} else {
					let img = document.querySelector('#dashBackground');
					let url = '../img/darkSoulsBackground.jpg';
					img.style.backgroundImage = 'url('+url+')';
				}
			});

		} else {

		}
	});

	$scope.changeDash = function(){
		$state.go('root.editDash');
	}
}
DashCtrl.$inject = ['$firebaseArray', '$scope', '$state', 'DashService'];

export default DashCtrl;