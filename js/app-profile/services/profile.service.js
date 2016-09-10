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
	
				item.fName = userData.fName;
				item.lName = userData.lName;
				item.address = userData.address;
				item.city = userData.city;
				item.state = userData.state;
				item.zip = userData.zip;
				item.country = userData.country;
				array.$save(item).then(function(){
				
					$state.go('root.profile');
				});

			} else {
				setTimeout(function(){
					checkData();
				}, 100);
			}
		}
	}
	//avatar is the attribute of type on the directive which is either the string avatar or photo
	//uploader is the progress bar in the directive
	function fileUpload(file, avatar, uploader) {	
		let user = firebase.auth().currentUser;
		let storageRef = firebase.storage().ref();
		let fileName = file.name;

		if (avatar === "avatar") {

			let ext = fileName.substring(fileName.lastIndexOf(".")+1).toLowerCase();

			let avatarRef = storageRef.child(user.uid + '/avatar/' + 'avatar.' +ext);
			let uploadTask = avatarRef.put(file);

			uploadTask.on('state_changed',
				function progress(snapshot){
					let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader.value = percent;
				},
				function error(err){
				},
				function complete(){

				//Get Avatar to save the URL to the Database
				let url = avatarRef.getDownloadURL().then(function(url) {
				
					let ref = firebase.database().ref('users/' +user.uid+ '/avatar');
					let obj = $firebaseObject(ref);
					obj.url = url;
					obj.$save().then(function(ref) {
						console.log(ref.key); //should equal avatar
					  ref.key === obj.$id; // true
					  $state.go('root.profile');
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
				});//getDownloadUrl
			});//uploadTask		
		} //if

		if (avatar === 'photos') {	
			//add a DATABASE RECORD to keep track of users' photos
			let ref = firebase.database().ref('users/' +user.uid+ '/'+avatar);
			let array = $firebaseArray(ref);
			array.$add({
				name: fileName,
			//get the id of where the DATABASE RECORD is stored
			}).then(function(ref){
				let refId = ref.key;
				// console.log(refId);
				let index = array.$indexFor(refId);
				// console.log(index);
			});
			//Current working solution 
			let id;
			let metadata;
			array.$loaded().then(function(){
				//get the last photo added
				let length = array.length; //example length of 6
				let current = length - 1; //0-5 index = 5
				//get the database id for the photo
				id = array.$keyAt(current);
				//create meta data to store with the photo on the STORAGE
				let metadata = {
				  customMetadata: {
				    'id': id
				  }
				}
				//upload the photo to STORAGE
				let imgRef = storageRef.child(user.uid + '/photos/' +fileName);
			
				let uploadTask = imgRef.put(file, metadata);

				uploadTask.on('state_changed',
					function progress(snapshot){
						let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						uploader.value = percent;
					},
					function error(err){
					},
					function complete(){
						//$stateParams.myParam === null so will be routed back to root.photos with the new photo. 
						$state.go('root.photo');
					}
				);

			}); //array.$loaded()
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