var app = angular.module('Control');
app.controller('coursesCtrl', function ($scope,courseSelectionFLags){
   $scope.cslFlags = courseSelectionFLags.data;

   //controllers for button clicks ot div elements
   //displays the div for programs A-Z
   $scope.pAZ = function(){
   	   $scope.cslFlags.pAZFlag = true;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   // check the flag for postgrad,undergrad... then send the correct reposne to php to query the database and create 
   //relevant json object to load into datatable






   }
   $scope.pF = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = true;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.cAZ = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = true;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.csa = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = true;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.sAZ = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = true;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.aoi = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = true;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.careers = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = true;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.grsi = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = true;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.fs = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = true;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.ct = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = true;
   	   $scope.cslFlags.gglossaryFlag = false;
   }
   $scope.glossary = function(){
   	   $scope.cslFlags.pAZFlag = false;
   	   $scope.cslFlags.pFFlag = false;
   	   $scope.cslFlags.cAZFlag = false;
   	   $scope.cslFlags.csaFlag = false;
   	   $scope.cslFlags.sAZFlag = false;
   	   $scope.cslFlags.aoiFlag = false;
   	   $scope.cslFlags.careersFlag = false;
   	   $scope.cslFlags.grsiFlag = false;
   	   $scope.cslFlags.fsFlag = false;
   	   $scope.cslFlags.ctFlag = false;
   	   $scope.cslFlags.gglossaryFlag = true;
   }

   //code for programs A-Z


   //code for programs by faculty

   //code for courses A-Z

   //code for courses by subject area

   //code for specialisations A-Z

   //code for area of interest

   //code for careers

   //code forgeneral rules and student info

   //code for faculties amd students

   //code for class timetable

   //code for glossary


 });