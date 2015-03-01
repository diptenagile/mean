user = angular.module('userDetailCntrl', []);

user.controller('userDataController', ['$scope', function ($scope) {
	
	$scope.userData = [ {Dipten : 'Hii Dipten This is User details' } , {test : 'Hello Test bot'} ];


}]);