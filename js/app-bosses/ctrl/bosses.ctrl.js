let BossesCtrl = function($scope, $state, BossesService){

	getBosses();

	function getBosses(){
		let bossesArray = BossesService.getBosses();

		$scope.bosses = bossesArray;
	}

	$scope.addBoss = function(){
		$state.go('root.addBoss');
	}

	
};
BossesCtrl.$inject = ['$scope', '$state', 'BossesService'];
export default BossesCtrl;