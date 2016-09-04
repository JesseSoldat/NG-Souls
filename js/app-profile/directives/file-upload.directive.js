let fileUpload = function(ProfileService){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: '=image',
			type: '@'
		},
		template: `
		<div>
			<form>
				<progress class="fileUploadProgress" value="0" max="100" id="uploader">0%</progress>
				<input class="fileUploadInput" type="file"
						name="img"
						accept="image/*"
						ng-model="image.one"
						placeholder="Choose a File"
				/>
				<button class="small button" id="addPhotosBtn">Upload</button>
			</form>
		</div>
		`,
		link: function(scope, element, attrs, ctrl){
			element.on('click', function(){
				let submit = angular.element(document.querySelector('#addPhotosBtn'));
				let uploader = document.getElementById('uploader');


			});
			element.on('submit', function(){
				
				let file = element.find('input')[0].files[0];
				ProfileService.fileUpload(file, scope.type, uploader)
			});
		}


	}
};
fileUpload.$inject = ['ProfileService'];

export default fileUpload;