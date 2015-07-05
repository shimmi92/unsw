var app = angular.module('Control');
app.controller('streamSelectedCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,sendQuery,$http){
    console.log("programselectedctrl");
    $scope.cslFlags = courseSelectionFLags.data;
    $scope.stf = studyTypeFlags.data;
    console.log($scope.cslFlags.clickedData);
    $http.get('json/programRules.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });




});