let ChatCtrl = function($scope, ChatService){

	$scope.user = 'Guest ' +Math.round(Math.random() *100);
	$scope.messages = ChatService;

	// calling $add on a synchronized array is like Array.push()
	$scope.addMessage = function(){
		$scope.messages.$add({
			from: $scope.user,
			content: $scope.message,
			timestamp: firebase.database.ServerValue.TIMESTAMP
		});
		//reset the message input
		$scope.message = '';
	};

	//if there are no messages
	$scope.messages.$loaded(function(){
		if($scope.messages.length === 0){

			$scope.messages.$add({
				from: 'JLab Inc.',
				content: 'Enjoy chatting!',
				timestamp: firebase.database.ServerValue.TIMESTAMP
			});
		}
	});


};
ChatCtrl.$inject = ['$scope', 'ChatService'];
export default ChatCtrl;