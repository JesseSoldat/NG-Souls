let ChatCtrl = function($scope, ChatService){

	$scope.user = 'Guest ' +Math.round(Math.random() *100);
	$scope.messages = ChatService;

	// calling $add on a synchronized array is like Array.push()
	$scope.addMessage = function(){
		$scope.messages.$add({
			from: $scope.user,
			content: $scope.message
		});
		//reset the message input
		$scope.message = '';
	};

	//if there are no messages
	$scope.messages.$loaded(function(){
		if($scope.messages.length === 0){
			console.log('no messages');
			$scope.messages.$add({
				from: 'JLab Inc.',
				content: 'Enjoy chatting!'
			});
		}
	});


};
ChatCtrl.$inject = ['$scope', 'ChatService'];
export default ChatCtrl;