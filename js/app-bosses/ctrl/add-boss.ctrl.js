let AddBossCtrl = function($scope, $state, BossesService){

	$scope.addBoss = function(boss){
		BossesService.addBosses(boss);
	}

};
AddBossCtrl.$inject = ['$scope', '$state', 'BossesService'];

export default AddBossCtrl;