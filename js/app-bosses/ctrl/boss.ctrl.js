let BossCtrl = function($scope, $state, $stateParams, BossesService){

	let id = $stateParams.id;

	let bossArray = BossesService.getBoss(id);

	$scope.bossid = id;
	$scope.boss = bossArray;

	$scope.editBoss = function(boss){
		$state.go('root.editBoss', {boss})
		
	}

	$scope.deleteBoss = function(boss){
		BossesService.deleteBoss(boss);
	};
};
BossCtrl.$inject = ['$scope', '$state', '$stateParams', 'BossesService'];

export default BossCtrl;