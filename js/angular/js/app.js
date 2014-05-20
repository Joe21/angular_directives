var myApp = angular.module('myApp', [
	'ngRoute',
	'directivesControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/form', {
		templateUrl: 'partials/form.html',
		controller: 'FormController'
	}).
	otherwise({
		redirectTo: '/form'
	});
}]);