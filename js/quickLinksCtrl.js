var app = angular.module('Control');
app.controller('quickLinksCtrl', function ($scope,quickLinkFlags){
    //holds the quickLinkFlags service
   $scope.qL = quickLinkFlags.data;



 });