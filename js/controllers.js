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
        $scope.finalFemale = $event.currentTarget.id;		
	};
	
	$scope.customFilter=function(item){		
		 var girl = $scope.finalFemale;
		 var boy =$scope.male;	
		 
		 if(item.male == boy && item.female == girl){
			 return true;
		  }
		else{
			 return false;
		 }
	}
	
	//reading JSON file
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;     
  });
  
}]);
 