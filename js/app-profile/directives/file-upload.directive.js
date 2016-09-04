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
				<input type="file"
						name="img"
						accept="image/*"
						ng-model="image.one"
						placeholder="Choose a File"
				/>
				<button id="addPhotosBtn">Upload</button>
			</form>
		</div>
		`,
		link: function(scope, element, attrs, ctrl){
			element.on('click', function(){
				let submit = angular.element(document.querySelector('#addPhotosBtn'));

			});
			element.on('submit', function(){
				
				let file = element.find('input')[0].files[0];
				ProfileService.fileUpload(file, scope.type)
			});
		}


	}
};
fileUpload.$inject = ['ProfileService'];

export default fileUpload;