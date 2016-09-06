let BossesService = function($firebaseArray, $firebaseObject, $state){
	this.getBosses = getBosses;
	this.getBoss = getBoss;
	this.addBosses = addBosses;
	this.editBoss = editBoss;
	this.deleteBoss = deleteBoss;

	let ref = firebase.database().ref('bosses');
	let array = $firebaseArray(ref);

	function getBosses(){
		return array;
	}

	function getBoss(id){
		let ref2 = firebase.database().ref('bosses/' + id);
		let obj = $firebaseObject(ref2);
		return obj;
		// let array2 = $firebaseArray(ref2);
		// return array2;
	}

	function addBosses(boss){
		array.$add({
			name: boss.name,
			url: boss.img
		});
	}

	function editBoss(boss){
		let ref = firebase.database().ref('bosses/' + boss.$id);
		let object = $firebaseObject(ref);

		object.name = boss.name;
		object.url = boss.url;
		object.$save().then(function(ref) {
			if(ref.key === boss.$id) {
  				$state.go('root.bosses');
			}
		}, function(error) {
 		 console.log("Error:", error);
		});	
	}

	function deleteBoss(boss){
		let ref = firebase.database().ref('bosses/' + boss);
		let obj = $firebaseObject(ref);
		obj.$remove().then(function(ref) {
  			$state.go('root.bosses');
		}, function(error) {
		  console.log("Error:", error);
		});
	}

};
BossesService.$inject = ['$firebaseArray', '$firebaseObject', '$state'];

export default BossesService;