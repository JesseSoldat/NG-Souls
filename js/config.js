let config = function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.html',

		})
		.state('root.dash', {
			url: '/',
			templateUrl: 'templates/dash.html'
		})
		.state('root.login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'LoginCtrl'
		})
		.state('root.register', {
			url:'/register',
			templateUrl: 'templates/register.html',
			controller: 'LoginCtrl'
		})
;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;