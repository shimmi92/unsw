var app = angular.module('Control');
app.controller('singleAwardRuleCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,sendQuery,$http){
   $scope.cslFlags = courseSelectionFLags.data;
   console.log($scope.cslFlags);
    var programObj;
    $http.post('json/programRules.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;   
     
      $http.post('json/specificStreamRules1.json').
	    success(function(data, status, headers, config) {
	      $scope.streamRules = data;     
	      string = console.log(data.data[0].code);
          console.log($scope.posts);

          $scope.title= $scope.posts.data[1].title;
          console.log( string);
       


	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    var string;


});