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
		.state('root.bosses', {
			url: '/bosses',
			controller: 'BossesCtrl',
			templateUrl: 'templates/app-bosses/bosses.html'
		})
		.state('root.boss', {
			url: '/boss/:id',
			controller: 'BossCtrl',
			templateUrl: 'templates/app-bosses/boss.html'
		})
		.state('root.addBoss', {
			url: '/addboss',
			controller: 'AddBossCtrl',
			templateUrl: 'templates/app-bosses/add-boss.html'
		})
		.state('root.editBoss', {
			url: '/editboss/:boss',
			controller: 'EditBossCtrl',
			templateUrl: 'templates/app-bosses/edit-boss.html'
		})
;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;