let PlaygroundCtrl = function($scope, $firebaseArray, $firebaseObject, simpleObj, bossesLoaded, databaseLoaded, bossLoaded){

let ref = firebase.database().ref();
//---------------------------------------------------------

let playground = ref.child('playground');
let bosses = ref.child('bosses');
let languages = ref.child('languages');

//$firebaseObject
let obj = $firebaseObject(playground);
let langObj = $firebaseObject(languages);

//3 Way Binding
obj.$bindTo($scope, 'data').then(function(){
	//CLEARS ALL FIELDS
	// ref.set({age: 36, name: 'Jesse Soldat'});
	//UPDATE A SINGLE FIELD
	// $scope.data.age = 35;
	$scope.data.gender = 'male';
});

//CREATES A NEW OBJ DELETES THE OLD ONE
langObj.language = "English";
langObj.secondLanguage = "Japanese";
langObj.thirdLanguage = "Thai";

langObj.$save().then(function(ref) {
  ref.key === obj.$id; // true
}, function(error) {
  console.log("Error:", error);
});


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
// console.log(bossesLoaded);
// console.log(bossesLoaded.length);


// let upperCaseBosses = [];
// bossesLoaded.forEach(function(boss){
// 	let b = boss.name.toUpperCase();
// 	upperCaseBosses.push(b);
// });
// console.log(upperCaseBosses);
//---------------------------------------------------------
//ENTIRE DATABASE
// console.log(databaseLoaded);

//LOOP OVER AN ARRAY
angular.forEach(bossesLoaded, function(value, key) {
    // console.log(key, value.name);
    // console.log(key, value);
    // console.log(bossesLoaded);

});
//LOOP OVER AN OBJECT
angular.forEach(bossLoaded, function(value, key) {
    // console.log(key, value);

});




};

PlaygroundCtrl.$inject = ['$scope', '$firebaseArray', '$firebaseObject', 'simpleObj', 'bossesLoaded', 'databaseLoaded', 'bossLoaded'];
export default PlaygroundCtrl;