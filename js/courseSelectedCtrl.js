var app = angular.module('Control');
app.controller('courseSelectedCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,sendQuery,$http){
    $scope.cslFlags = courseSelectionFLags.data;
    $scope.stf = studyTypeFlags.data;
    console.log($scope.cslFlags.clickedData);
    $http.get('json/rules.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });




});