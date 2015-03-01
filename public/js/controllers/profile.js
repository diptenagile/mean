// appMod = module.exports;
app = angular.module('profileCntrl',[]);
app.controller('profileController', ['$scope', function ($scope) {

 	$scope.data1 = [

 		{
 			name : "Dipten",
 			email : "d@d.com"
 		},
 		{
 			name : "test",
 			email : "test@d.com"
 		}

 	];

 	$scope.test = function () {
 	
 		console.log('yeah');
 		alert("done");
 	}
 }]);

 // module.exports = app;