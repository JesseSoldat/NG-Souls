import angular from 'angular';
//CTRL
import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';
import PhotosCtrl from './ctrl/photos.ctrl';

//SERVICES
import ProfileService from './services/profile.service';

//Directives
import fileUpload from './directives/file-upload.directive';


angular
	.module('app.profile', [])

	.controller('ProfileCtrl', ProfileCtrl)
	.controller('EditProfileCtrl', EditProfileCtrl)
	.controller('PhotosCtrl', PhotosCtrl)
	.service('ProfileService', ProfileService)
	.directive('fileUpload', fileUpload)
;