let PhotosCtrl = function($scope, ProfileService, $state){

	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			//Storage
			let storageRef = firebase.storage().ref();

			let photos = ProfileService.getPhotos();

			//Array for storing file names and URLs
			let fileArray = [];
			let urlArray = [];

			//TEST------------------------------------------------
			let objArray = [];
			//TEST------------------------------------------------

			// Create an Array of files URLs to download from the Database img section
			
			photos.$loaded().then(function(){
			
				//Push file names to the files array
				for(let i = 0; i < photos.length; i++){
					fileArray.push(photos[i].name);
				}
			
				buildUrlArray();

				function buildUrlArray(){
					for(let i = 0; i < fileArray.length; i++){
						storageRef.child(user.uid + '/photos/' + fileArray[i]).getDownloadURL().then(function(url){
							urlArray.push(url);

							//TEST---------------------------------------------
							let obj ={};
							obj.url = url;
							obj.name =fileArray[i];
							objArray.push(obj);
							//TEST--------------------------------------------

							$scope.$apply(function(){
								$scope.url = urlArray;
								$scope.nameUrl = objArray;
								// console.log(objArray);
							});
						});
					}
				}
			});
		} else {

		}
	}); 

	$scope.singlePhoto = function(url){
		$state.go('root.photo', {myParam: {url: url}})
	}


};
PhotosCtrl.$inject = ['$scope', 'ProfileService', '$state'];
export default PhotosCtrl;