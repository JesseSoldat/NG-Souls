let PhotosCtrl = function($scope, ProfileService){

	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			//Storage
			let storageRef = firebase.storage().ref();

			let photos = ProfileService.getPhotos();

			//Array for storing file names and URLs
			let fileArray = [];
			let urlArray = [];

			// Create an Array of files URLs to download from the Database img section
			
			photos.$loaded().then(function(){
				console.log(photos);

				//Push file names to the files array
				for(let i = 0; i < photos.length; i++){
					fileArray.push(photos[i].name);
				}
				console.log(fileArray);
				buildUrlArray();

				function buildUrlArray(){
					for(let i = 0; i < fileArray.length; i++){

						storageRef.child(user.uid + '/photos/' + fileArray[i]).getDownloadURL().then(function(url){
							urlArray.push(url);
							$scope.$apply(function(){
								$scope.url = urlArray;
							})
						})

					}
				}
			});
		} else {

		}
	})


};
PhotosCtrl.$inject = ['$scope', 'ProfileService'];
export default PhotosCtrl;