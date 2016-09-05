import angular from 'angular';
import 'angular-ui-router';



import config from './config';
//CTRL
import LayoutCtrl from './ctrl/layout.ctrl';
import LoginCtrl from './ctrl/login.ctrl';
import DashCtrl from './ctrl/dash.ctrl';
import EditDashCtrl from './ctrl/edit-dash.ctrl';
import PlaygroundCtrl from './ctrl/playground.ctrl';
//SERVICES
import LoginService from './services/login.service';
import DashService from './services/dash.service';
//DIRECTIVES
import dashUpload from './directives/dash-upload.directive';



angular
	.module('app.core', ['ui.router'])
	.config(config)

	.controller('LayoutCtrl', LayoutCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.controller('DashCtrl', DashCtrl)
	.controller('EditDashCtrl', EditDashCtrl)
	.controller('PlaygroundCtrl', PlaygroundCtrl)

	.service('LoginService', LoginService)
	.service('DashService', DashService)

	.directive('dashUpload',dashUpload)


;