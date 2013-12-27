'use strict';

angular.module('registerUserApp')
	.controller('UserCtrl', function($scope, $http) {
		$http.get('/api/users').success(function(users) {
			$scope.users = users;
		});

		$scope.createUser = function() {
			if ($scope.user && $scope.user.name) {
				$http({
					method: 'POST',
					url: '/api/users',
					data: $scope.user
				}).success(function() {
					$scope.users.push({
						name: $scope.user.name
					});
					$scope.user.name = '';
				});
			}
		};
	});