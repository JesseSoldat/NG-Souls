let config = function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/app-core/layout.html',
			controller: 'LoginCtrl'

		})
		.state('root.dash', {
			url: '/',
			templateUrl: 'templates/app-core/dash.html',
			controller: 'DashCtrl'
		})
		.state('root.login', {
			url: '/login',
			templateUrl: 'templates/app-core/login.html',
			controller: 'LoginCtrl'
		})
		.state('root.register', {
			url:'/register',
			templateUrl: 'templates/app-core/register.html',
			controller: 'LoginCtrl'
		})
		.state('root.profile', {
			url: '/profile',
			controller: 'ProfileCtrl',
			templateUrl: 'templates/app-profile/profile.html'
		})
		.state('root.editProfile', {
			url: '/editprofile',
			controller: 'EditProfileCtrl',
			templateUrl: 'templates/app-profile/edit-profile.html'
		})
;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;