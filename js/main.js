import angular from 'angular';
import 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';

import config from './config';


console.log('Hello, World');



angular
	.module('app', ['ui.router', 'firebase'])
	.config(config)


;
