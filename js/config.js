let config = function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.html',

		})
		.state('root.login', {
			url: '/',
			templateUrl: 'templates/login.html'
		});
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;