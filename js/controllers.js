var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http ) {
	$scope.myMale = false;
	$scope.varFemaleSinger= false;
	$scope.mySongs = false;
	
    $scope.toggle = function() {		  
		  $scope.myMale = !$scope.myMale;	 
		  $scope.varFemaleSinger= false;		 
		  $scope.mySongs = false;		  
	};
	
	$scope.first_toggle = function($event) {
		  var str = $event.currentTarget.id;				   		  		   
		  $scope.mySongs = false;
		  $scope.varFemaleSinger = !$scope.varFemaleSinger;
		  $scope.male=str;			  
	};
	
	$scope.female_toggle = function($event){
		$scope.mySongs = true;
		$scope.varFemaleSinger = true;
		$scope.myMale = true;
		var girl = $event.currentTarget.id;
		var boy =$scope.male;		
		$scope.query =boy+girl;
		 
		//$scope.query.girl = girl;
	};
	
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;     
  });
}]);
 