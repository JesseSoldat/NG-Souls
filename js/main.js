import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';

import './app-core/index';
import './app-profile/index';
import './app-bosses/index';

var fireConfig = {
    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
    authDomain: "playground-3f11f.firebaseapp.com",
    databaseURL: "https://playground-3f11f.firebaseio.com",
    storageBucket: "playground-3f11f.appspot.com"
  };
  firebase.initializeApp(fireConfig);

angular
	.module('app', ['app.core', 'app.profile', 'app.bosses', 'ui.router', 'firebase'])


;
