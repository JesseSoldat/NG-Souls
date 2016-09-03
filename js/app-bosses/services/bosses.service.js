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
		let array2 = $firebaseArray(ref2);
		let obj = $firebaseObject(ref2);
		// return array2;
		return obj;

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
  			ref.key === boss.$id; 
  			$state.go('root.bosses');
		}, function(error) {
 		 console.log("Error:", error);
		});	
	}

	function deleteBoss(boss){
		console.log(boss);
	}

};
BossesService.$inject = ['$firebaseArray', '$firebaseObject', '$state'];

export default BossesService;