import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

import config from './app-core/config';

// CTRL
import LoginCtrl from './app-core/ctrl/login.ctrl';
import DashCtrl from './app-core/ctrl/dash.ctrl';

// SERVICE
import LoginService from './app-core/services/login.service';

var fireConfig = {
    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
    authDomain: "playground-3f11f.firebaseapp.com",
    databaseURL: "https://playground-3f11f.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(fireConfig);

angular
	.module('app', ['ui.router', 'firebase'])
	.config(config)

	.controller('LoginCtrl', LoginCtrl)
	.controller('DashCtrl', DashCtrl)

	.service('LoginService', LoginService)


;
