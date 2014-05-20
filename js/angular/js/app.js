var myApp = angular.module('myApp', [
	'ngRoute',
	'ngResource',
	'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/form', {
		templateUrl: 'js/angular/partials/form.html',
		controller: 'MyController'
	}).
	otherwise({
    redirectTo: '/form'
  });
}]);