let PlaygroundCtrl = function($scope, $firebaseArray, $firebaseObject, simpleObj, bossesLoaded){

let ref = firebase.database().ref();
//---------------------------------------------------------

let playground = ref.child('playground');
let bosses = ref.child('bosses');

//$firebaseObject
let obj = $firebaseObject(playground);

//3 Way Binding
obj.$bindTo($scope, 'data').then(function(){
	//CLEARS ALL FIELDS
	// ref.set({age: 36, name: 'Jesse Soldat'});
	//UPDATE A SINGLE FIELD
	// $scope.data.age = 35;
})

//$firebaseArray
//---------------------------------------------------------

//DO NOT UNWRAP PROMISES
// let array = $firebaseArray(bosses);

// array.$loaded().then(function(){
// 	console.log(array);
// 	console.log(array.length);
// });
//---------------------------------------------------------
//RESOLVE THE PROMISE IN THE ROUTER
console.log(bossesLoaded);
console.log(bossesLoaded.length);

};
PlaygroundCtrl.$inject = ['$scope', '$firebaseArray', '$firebaseObject', 'simpleObj', 'bossesLoaded'];
export default PlaygroundCtrl;