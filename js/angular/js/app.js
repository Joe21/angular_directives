var myApp = angular.module('myApp', [
	'ngRoute',
	'ngResource',
	'myControllers',
	'angularFileUpload'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/form', {
		templateUrl: 'js/angular/partials/form.html',
		controller: 'MyController'
	}).
	when('/upload', {
		templateUrl: 'js/angular/partials/upload.html',
		controller: 'FileController'
	}).
	otherwise({
    redirectTo: '/form'
  });
}]);