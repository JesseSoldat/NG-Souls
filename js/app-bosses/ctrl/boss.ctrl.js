let BossCtrl = function($scope, $state, $stateParams, BossesService){
	//get the id of the boss from the url
	let id = $stateParams.id;

	let bossObj = BossesService.getBoss(id);

	$scope.boss = bossObj;

	$scope.editBoss = function(boss){
		$state.go('root.editBoss', {boss})	
	}

	$scope.deleteBoss = function(boss){
		BossesService.deleteBoss(boss);
	};
};
BossCtrl.$inject = ['$scope', '$state', '$stateParams', 'BossesService'];

export default BossCtrl;