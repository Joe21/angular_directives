var myControllers = angular.module('myControllers', []);

myControllers.controller('MyController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/angular/js/data.json').success(function(data) {
		$scope.formdirectives = data;
		alert(data);
	});
}]);

myControllers.controller('FileController', ['$scope', '$upload', function($scope, $upload) {
	$scope.onFileSelect = function($files) {
		// $files: an array of files selected, each has name, size, type
		for (var i = 0; i < $files.length; i++) {
			var file = $files[i];
			$scope.upload = $upload.upload({
				url: 'index.html#/upload',
				method: 'POST',
				data: {myObj: $scope.myModelObj},
				file: file
				// Stuff I need to review
			}).progress(function(evt) {
				console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
			}).success(function(data, status, headers, config) {
				console.log(data);
			});
		}
	};
}]);