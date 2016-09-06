let fileUpload = function(ProfileService){
	return {
		restrict: 'E',
		scope: {
			type: '@'
		},
		template: `
		<div>
			<form>
				<div id="fileUploadControls">
					<progress class="fileUploadProgress" value="0" max="100" id="uploader">0%</progress>
					<input class="fileUploadInput" type="file"
							name="img"
							accept="image/*"
							ng-model="image.one"
							placeholder="Choose a File"
					/>
				</div>
				<button class="small button" id="addPhotosBtn">Upload</button>
			</form>
		</div>
		`,
		link: function(scope, element, attrs, ctrl){
			let submitBtn
			element.on('click', function(){
				submitBtn = document.querySelector('#addPhotosBtn');
				let uploader = document.getElementById('uploader');


			});
			element.on('submit', function(){
				
				let file = element.find('input')[0].files[0];
				submitBtn.disabled = true;
				ProfileService.fileUpload(file, scope.type, uploader)
			});
		}


	}
};
fileUpload.$inject = ['ProfileService'];

export default fileUpload;