//Libraries
import angular from 'angular';
import 'angular-ui-router';

import config from './config';
//CTRL
import LayoutCtrl from './ctrl/layout.ctrl';
import LoginCtrl from './ctrl/login.ctrl';
import DashCtrl from './ctrl/dash.ctrl';
import EditDashCtrl from './ctrl/edit-dash.ctrl';
//TESTING FEATURES
import PlaygroundCtrl from './ctrl/playground.ctrl';
import ChatCtrl from './ctrl/chat.ctrl';

//SERVICES
import LoginService from './services/login.service';
import DashService from './services/dash.service';
//TESTING FEATURES
import ChatService from './services/chat.service';
//DIRECTIVES
import dashUpload from './directives/dash-upload.directive';

angular
	.module('app.core', ['ui.router'])
	.config(config)

	.controller('LayoutCtrl', LayoutCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.controller('DashCtrl', DashCtrl)
	.controller('EditDashCtrl', EditDashCtrl)
	//Testing Features
	.controller('PlaygroundCtrl', PlaygroundCtrl)
	.controller('ChatCtrl', ChatCtrl)

	.service('LoginService', LoginService)
	.service('DashService', DashService)

	//Testing Features
	.service('ChatService', ChatService)

	.directive('dashUpload',dashUpload)


;