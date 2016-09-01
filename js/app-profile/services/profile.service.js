let ProfileService = function($firebaseArray, $state){

	this.getProfile = getProfile;
	this.addProfile = addProfile;

	function getProfile(user){
		
		let ref = firebase.database().ref('users/' + user.uid);
		let array = $firebaseArray(ref);
		
		return array;
	}



	function addProfile(userData){
		console.log(userData);
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
};
ProfileService.$inject = ['$firebaseArray', '$state'];

export default ProfileService;