appService = angular.module('DataService', []);

appService.factory('dataService', ['$http', function ($http) {

	return {

		getUserInfo : function (dataArray) {

			$http.get('/api/nerds');
		}

	};

}]);