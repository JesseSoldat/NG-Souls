let DashCtrl = function($firebaseArray, $scope, $state, DashService) {

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			let getBackground = DashService.getBackground(user);

			getBackground.$loaded().then(function(){
				if (getBackground.length > 0) {
					$scope.haveBackground = true;
					let url = getBackground[0].$value;
					
					let img = document.querySelector('#dashBackground2');
					
					img.style.backgroundImage = 'url('+url+')';
					

				} else {
					$scope.haveBackground = false;
					let img = document.querySelector('#dashBackground2');
					let url = '../img/darkSoulsBackground.jpg';
					img.style.backgroundImage = 'url('+url+')';
				}
			});

		} else {

		}
	});

	// let dashDiv = document.querySelector('#dashBackground');
	// let dashBtn = document.querySelector('#dashBtn');

	// dashDiv.addEventListener("mouseover", function(){
	// 	dashBtn.style.opacity = 1;
	// });
	// dashDiv.addEventListener("mouseleave", function(){
	// 	dashBtn.style.opacity = 0;	
	// });

	$scope.changeDash = function(){
		$state.go('root.editDash');
	}
}
DashCtrl.$inject = ['$firebaseArray', '$scope', '$state', 'DashService'];

export default DashCtrl;