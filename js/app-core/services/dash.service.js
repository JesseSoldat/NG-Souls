let DashService = function($firebaseArray, $state, $firebaseObject){

	this.fileUpload = fileUpload;
	this.getBackground = getBackground;

	function getBackground(user){
	
		let ref = firebase.database().ref('users/' +user.uid+ '/dashImg');
		let array = $firebaseArray(ref);
		return array;
	}

	function fileUpload(file, uploader){
		
		let user = firebase.auth().currentUser;
		let storageRef = firebase.storage().ref();
		let fileName = file.name;
		let ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();
		let dashRef = storageRef.child(user.uid+ '/dash/dashImg/' + 'dashImg.' +ext);
		let uploadTask = dashRef.put(file);

		uploadTask.on('state_changed', 
			function(snapshot){
				let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				uploader.value = percent;
			},
			function error(err){

			},
			function complete(){
				$state.go('root.dash');
			});
		//Save URL to DATABASE
		let url = dashRef.getDownloadURL().then(function(url){
			let ref = firebase.database().ref('users/' +user.uid+ '/dashImg');
			let obj = $firebaseObject(ref);
			obj.url = url;
			obj.$save().then(function(ref){
				ref.key === obj.$id;
			}, function(error){
				console.log('Error: ', error);
			});
		}).catch(function(error) {
			  switch (error.code) {
			    case 'storage/object_not_found':
			      // File doesn't exist
			      break;
			    case 'storage/unauthorized':
			      // User doesn't have permission to access the object
			      break;
			    case 'storage/canceled':
			      // User canceled the upload
			      break;
			    case 'storage/unknown':
			      // Unknown error occurred, inspect the server response
			      break;
			  }
			 
		});

	}

};
DashService.$inject = ['$firebaseArray', '$state', '$firebaseObject'];
export default DashService;