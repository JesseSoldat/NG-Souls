let BossesCtrl = function($scope, $state, BossesService){
	
	let bossesArray = BossesService.getBosses();

	$scope.bosses = bossesArray;

	$scope.addBoss = function(){
		$state.go('root.addBoss');
	}	
};
BossesCtrl.$inject = ['$scope', '$state', 'BossesService'];
export default BossesCtrl;