var app = angular.module('Control');
app.controller('courseSelectedCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,sendQuery){
    $scope.cslFlags = courseSelectionFLags.data;
    $scope.stf = studyTypeFlags.data;
    console.log($scope.cslFlags.clickedData);



});