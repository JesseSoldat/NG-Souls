let config = function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/layout.html'

		})
		.state('root.dash', {
			url: '/',
			controller: 'DashCtrl',
			templateUrl: 'templates/app-core/dash.html'
		})
		.state('root.login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'templates/app-core/login.html'
		})
		.state('root.register', {
			url:'/register',
			templateUrl: 'templates/app-core/register.html',
			controller: 'LoginCtrl'
		})
		.state('root.playground', {
			url: '/playground',
			controller: 'PlaygroundCtrl',
			templateUrl: 'templates/app-core/playground.html',
			resolve: {
				simpleObj:  function(){
            		return {value: 'simple!'};
         		},
         		bossesLoaded: function($firebaseArray){
     				let ref = firebase.database().ref('bosses');
					let array = $firebaseArray(ref);
					return array.$loaded();
         		},
         		databaseLoaded: function($firebaseArray){
         			let ref = firebase.database().ref();
         			let array = $firebaseArray(ref);
         			return array.$loaded();
         		},
         		bossLoaded: function($firebaseObject){
         			let ref = firebase.database().ref('bosses/-KQZQerEUeqbbbUm4NLG');
         			let obj = $firebaseObject(ref);
         			return obj.$loaded();
         		}

			}
			
			

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