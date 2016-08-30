import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

import config from './config';

// CTRL
import LoginCtrl from './ctrl/login.ctrl';

// SERVICE
import LoginService from './services/login.service';



angular
	.module('app', ['ui.router', 'firebase'])
	.config(config)

	.controller('LoginCtrl', LoginCtrl)

	.service('LoginService', LoginService)


;
