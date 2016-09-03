let BossCtrl = function($scope, $state, $stateParams, BossesService){

	let id = $stateParams.id;

	let bossArray = BossesService.getBoss(id);

	console.log(bossArray);
	$scope.bossid = id;
	$scope.boss = bossArray;

	
	// let counter = function(){
	// 	if(bossArray > 0){
	// 		for(let i = 1; i < bossArray.length; i++){
	// 			console.log('counter');
	// 			console.log(bossArray[i].name);
	// 		}
	// 	} else {
	// 		setTimeout(function(){
	// 			counter();
	// 		}, 500);
	// 	}
	// }
	// counter();
	
	
};
BossCtrl.$inject = ['$scope', '$state', '$stateParams', 'BossesService'];

export default BossCtrl;