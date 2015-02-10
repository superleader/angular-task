'use strict';

/* Controllers */

angular.module('Controllers', [])

.controller('ItemsListCtrl', ['$scope', '$http',
   function($scope, $http) {
    $http.get('data.json').success(function(data) {
      $scope.items = data.items
    })
}])

.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
		var index = null
		for(var i=0; i < $scope.items.length; i++)
			if($scope.items[i].title == $routeParams.title){
				$scope.items[i].class = 'active'
				$scope.selected = $scope.items[i]
				index = i
			}else{
				$scope.items[i].class = ''
			}
		if(index != null ){
			var last_i = $scope.items.length - 1
			$scope.prev = $scope.items[index == 0 ? last_i : index - 1].content
			$scope.next = $scope.items[index == last_i ? 0 : index + 1].content
		}
	}
])