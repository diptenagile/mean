	appRoute = angular.module('appRoutes', []);

	appRoute.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		
		$routeProvider

		.when('/profile', {
			
			templateUrl:'views/profile.html',
			controller:'profileController'

		})
		.when('/info', {

			templateUrl : 'views/info.html',
			controller : 'userDataController'
		});

		// $locationProvider.html5Mode(true);

	}]);