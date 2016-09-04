let ProfileService = function($firebaseArray, $state, $firebaseObject){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;
	this.fileUpload = fileUpload;
	this.getAvatar = getAvatar;
	this.getPhotos = getPhotos;

	function getProfile(user){
		let ref = firebase.database().ref('users/' + user.uid+ '/bio');
		let array = $firebaseArray(ref);
		
		return array;
	}

	function addProfile(userData){
		let user = firebase.auth().currentUser;

		let ref = firebase.database().ref('users/' +user.uid+ '/bio');

		let array = $firebaseArray(ref);

		array.$add({
			email: user.email,
			id: user.uid,
			fName: userData.fName,
			lName: userData.lName,
			address: userData.address,
			city: userData.city,
			state: userData.state,
			zip: userData.zip,
			country: userData.country,
		});
	}

	function editProfile(userData){
		let user = firebase.auth().currentUser;

		let ref = firebase.database().ref('users/' + user.uid+ '/bio');

		let array = $firebaseArray(ref);
		
		checkData();

		function checkData(){
			if (array.length > 0) {
				let item = array.$getRecord(userData.$id)
				// console.log('Checked Data');
				item.fName = userData.fName;
				item.lName = userData.lName;
				item.address = userData.address;
				item.city = userData.city;
				item.state = userData.state;
				item.zip = userData.zip;
				item.country = userData.country;
				array.$save(item).then(function(){
					// console.log('Saved Item');
					$state.go('root.profile');
				});

			} else {
				setTimeout(function(){
					checkData();
				}, 100);
			}
		}
	}

	function fileUpload(file, avatar) {	
		let user = firebase.auth().currentUser;
		let storageRef = firebase.storage().ref();
		let fileName = file.name;


		if (avatar === "avatar") {

		
			let ext = fileName.substring(fileName.lastIndexOf(".")+1).toLowerCase();

			let avatarRef = storageRef.child(user.uid + '/avatar/' + 'avatar.' +ext);
			let uploadTask = avatarRef.put(file);

			//-----------------------------------------
			//Get Avatar to save the URL to the Database

			let url = avatarRef.getDownloadURL().then(function(url) {
				console.log(url);
				let ref = firebase.database().ref('users/' +user.uid+ '/avatar');
				let obj = $firebaseObject(ref);
				obj.url = url;
				obj.$save().then(function(ref) {
				  ref.key === obj.$id; // true
			}, function(error) {
			  console.log("Error:", error);
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
			
			//-----------------------------------------
			


		}

		if (avatar === 'photos') {
			console.log('photo');
			//add a DATABASE RECORD to keep track of users' photos
			let ref = firebase.database().ref('users/' +user.uid+ '/'+avatar);
			let array = $firebaseArray(ref);

			array.$add({
				name: fileName
			});

			//upload the photo to STORAGE
			let imgRef = storageRef.child(user.uid + '/photos/' +fileName);
			let uploadTask = imgRef.put(file);
		}

	}

	function getAvatar(user){	

		let ref = firebase.database().ref('users/' +user.uid+ '/avatar');
		let array = $firebaseArray(ref);
		
		return array;

	}

	function getPhotos(){
		let user = firebase.auth().currentUser;
		let ref = firebase.database().ref('users/' +user.uid+ '/photos');
		let array = $firebaseArray(ref);
		
		return array;

	}

};
ProfileService.$inject = ['$firebaseArray', '$state', '$firebaseObject'];

export default ProfileService;