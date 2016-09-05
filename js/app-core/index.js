import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import LayoutCtrl from './ctrl/layout.ctrl';
import LoginCtrl from './ctrl/login.ctrl';
import DashCtrl from './ctrl/dash.ctrl';

import PlaygroundCtrl from './ctrl/playground.ctrl';

import LoginService from './services/login.service';


angular
	.module('app.core', ['ui.router'])
	.config(config)

	.controller('LayoutCtrl', LayoutCtrl)
	.controller('LoginCtrl', LoginCtrl)
	.controller('DashCtrl', DashCtrl)
	.controller('PlaygroundCtrl', PlaygroundCtrl)

	.service('LoginService', LoginService)


;