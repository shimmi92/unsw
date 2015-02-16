var app = angular.module('Control');
app.controller('homeCtrl', function ($scope,quickLinkFlags){
   //holds the quickLinkFlags service
   $scope.qL = quickLinkFlags.data;

   $scope.duaRedirect = function(){
   	   $scope.qL.duaFlag = true;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.moodleRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = true;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }

   $scope.dpqRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = true;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }

   $scope.lrRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = true;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.raRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = true;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.aoRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = true;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.iaRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = true;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.feesRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = true;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.acRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = true;
   	   $scope.qL.feeEstimatorFlag = false;

   }
   $scope.feRedirect = function(){
   	   $scope.qL.duaFlag = false;
   	   $scope.qL.moodleFlag = false;
   	   $scope.qL.dpqFlag = false;
   	   $scope.qL.lecRecordingsFlag = false;
   	   $scope.qL.resApplicantsFlag = false;
   	   $scope.qL.applyOnlineFlag = false;
   	   $scope.qL.intApplicantsFlag = false;
   	   $scope.qL.feesFlag = false;
   	   $scope.qL.academicCalFlag = false;
   	   $scope.qL.feeEstimatorFlag = true;

   }



 });