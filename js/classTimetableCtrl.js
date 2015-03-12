var app = angular.module('Control');
app.controller('classTimetableCtrl', function ($scope){
   
   $scope.kensCampusFlag = true;
   $scope.padCampusFlag = false;
   $scope.adfaCampusFlag = false;

   //handler for kensington campus tab
   $scope.kensCampus = function(){  
   	console.log("kensCampus");
   	$scope.kensCampusFlag = true;
   	$scope.padCampusFlag = false;
   	$scope.adfaCampusFlag = false;
   };
   //handler for paddington campus tab
   $scope.padCampus= function(){
   	console.log("padCampus");
   	$scope.kensCampusFlag = false;
   	$scope.padCampusFlag = true;
   	$scope.adfaCampusFlag = false;
   };
   //handler for adfa campus tab
   $scope.adfaCampus=function(){
   	
   	$scope.kensCampusFlag = false;
   	$scope.padCampusFlag = false;
   	$scope.adfaCampusFlag = true;
      
   };

   $(document).ready(function() {
      var kensingtonCampusTable = $('#kensingtonCampusTable').DataTable({
                      "columnDefs": [
                     { "width": "40%", "targets": 0 }
                   ],
                 "ordering": false,
                      "ajax": "json/subject.json",
                      "columns":[  
                          {"data":"code"},
                          {"data":"name"},  //must be the keys in the objects
                          {"data":"school"}, 
                        

                      ],
                  
                 
                   });
  

       var paddingtonCampusTable = $('#paddingtonCampusTable').DataTable({
                      "columnDefs": [
                     { "width": "40%", "targets": 0 }
                   ],
                 "ordering": false,
                      "ajax": "json/subject.json",
                      "columns":[  
                          {"data":"code"},
                          {"data":"name"},  //must be the keys in the objects
                          {"data":"school"}, 
                        

                      ],
                  
                 
                   });
     

      var adfaCampusTable = $('#adfaCampusTable').DataTable({
                      "columnDefs": [
                     { "width": "40%", "targets": 0 }
                   ],
                 "ordering": false,
                      "ajax": "json/subject.json",
                      "columns":[  
                          {"data":"code"},
                          {"data":"name"},  //must be the keys in the objects
                          {"data":"school"}, 
                        

                      ],
                  
                 
                   });
      });
  
  

//end of file
 });