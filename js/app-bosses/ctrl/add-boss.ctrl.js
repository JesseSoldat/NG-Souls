let AddBossCtrl = function($scope, $state, BossesService){

	$scope.addBoss = function(boss){
		BossesService.addBosses(boss);

		$state.go('root.bosses');
	}
};
AddBossCtrl.$inject = ['$scope', '$state', 'BossesService'];

export default AddBossCtrl;