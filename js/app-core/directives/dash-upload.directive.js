let dashUpload = function(DashService){
	return {
		restrict: 'E',
		scope: {
			type: '@'
		}, 
		template: `
		<div class="layoutForm">
			<form>
				<div id="fileUploadControls">
					<progress class="fileUploadProgress" value="0" max="100" id="dashUploader">0%</progress>
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

			let uploader
			let submitBtn;
			element.on('click', function(){
				submitBtn = document.querySelector('#addPhotosBtn');
				uploader = document.getElementById('dashUploader');
			});
			element.on('submit', function(){	
				let file = element.find('input')[0].files[0];
				submitBtn.disabled = true;
				DashService.fileUpload(file, uploader);
			});
		}


	}
};
dashUpload.$inject = ['DashService'];

export default dashUpload;