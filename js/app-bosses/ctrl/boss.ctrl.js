let BossCtrl = function($scope, $state, $stateParams, BossesService){

	let id = $stateParams.id;

	let bossArray = BossesService.getBoss(id);

	$scope.bossid = id;
	$scope.boss = bossArray;

	
};
BossCtrl.$inject = ['$scope', '$state', '$stateParams', 'BossesService'];

export default BossCtrl;