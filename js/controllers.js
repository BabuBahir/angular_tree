var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http ) {
	$scope.myMale = false;
	$scope.varFemaleSinger= false;
	$scope.mySongs = false;
	
    $scope.toggle = function() {		  
		  $scope.myMale = !$scope.myMale;	 
		  $scope.varFemaleSinger= false;		  
	};
	
	$scope.first_toggle = function($event) {
		  var str = $event.currentTarget.id;				   		  		   
		  $scope.varFemaleSinger = !$scope.varFemaleSinger;
		  $scope.male=str;			  
	};
	
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;     
  });
}]);
 