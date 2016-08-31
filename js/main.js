import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

import './app-core/index';
import './app-profile/index';



var fireConfig = {
    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
    authDomain: "playground-3f11f.firebaseapp.com",
    databaseURL: "https://playground-3f11f.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(fireConfig);

angular
	.module('app', ['app.core', 'app.profile', 'ui.router', 'firebase'])


;
