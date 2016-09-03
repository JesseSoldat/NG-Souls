let EditBossCtrl = function($scope, BossesService, $stateParams){

	let bossId = $stateParams.boss;


	let bossData = BossesService.getBoss(bossId);
	$scope.boss = bossData;

	$scope.editBoss = function(boss) {

		BossesService.editBoss(boss);
	}

};
EditBossCtrl.$inject = ['$scope', 'BossesService', '$stateParams'];

export default EditBossCtrl;