import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import LoginCtrl from './ctrl/login.ctrl';
import DashCtrl from './ctrl/dash.ctrl';

import LoginService from './services/login.service';


angular
	.module('app.core', ['ui.router'])
	.config(config)

	.controller('LoginCtrl', LoginCtrl)
	.controller('DashCtrl', DashCtrl)

	.service('LoginService', LoginService)


;