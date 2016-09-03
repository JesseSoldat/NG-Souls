let ProfileService = function($firebaseArray, $state){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;

	function getProfile(user){
		let ref = firebase.database().ref('users/' + user.uid);
		let array = $firebaseArray(ref);
		
		return array;
	}

	function addProfile(userData){
		let user = firebase.auth().currentUser;

		let ref = firebase.database().ref('users/' + user.uid);

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

		let ref = firebase.database().ref('users/' + user.uid);

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

};
ProfileService.$inject = ['$firebaseArray', '$state'];

export default ProfileService;