let BossesService = function($firebaseArray, $firebaseObject){

	this.getBosses = getBosses;
	this.getBoss = getBoss;
	this.addBosses = addBosses;

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

};
BossesService.$inject = ['$firebaseArray', '$firebaseObject'];

export default BossesService;