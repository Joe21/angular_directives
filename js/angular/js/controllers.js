var myControllers = angular.module('myControllers', []);

myControllers.controller('MyController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/angular/js/data.json').success(function(data) {
		$scope.formdirectives = data;
		alert(data);
	});
}]);