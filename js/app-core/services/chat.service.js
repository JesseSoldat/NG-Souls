let ChatService = function($firebaseArray){

	let ref = firebase.database().ref('chat');

	return $firebaseArray(ref);

};
ChatService.$inject = ['$firebaseArray'];
export default ChatService;