var app = angular.module('Control');
app.controller('homeCtrl', function ($scope,quickLinkFlags,studyTypeFlags,studyLevel){
   //holds the quickLinkFlags service
   $scope.qL = quickLinkFlags.data;
   $scope.stf = studyTypeFlags.data;
   $scope.SL = studyLevel.data;
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

   //control pstudy type clicks
   $scope.postGradRes = function(){
      $scope.stf.undergraduateFlag=false;
      $scope.stf.postgraduateFlag=false;
      $scope.stf.postgraduateResearchFlag=true;
      $scope.stf.nonAwardFlag=false;
   }
   $scope.undergrad = function(){
      $scope.SL.selectedStudyLevel = "UG";
      $scope.stf.undergraduateFlag=true;
      $scope.stf.postgraduateFlag=false;
      $scope.stf.postgraduateResearchFlag=false;
      $scope.stf.nonAwardFlag=false;
   }
   $scope.postgrad = function(){
      $scope.SL.selectedStudyLevel = "PG";
      $scope.stf.undergraduateFlag=false;
      $scope.stf.postgraduateFlag=true;
      $scope.stf.postgraduateResearchFlag=false;
      $scope.stf.nonAwardFlag=false;
   }
   $scope.nonAward = function(){
      $scope.stf.undergraduateFlag=false;
      $scope.stf.postgraduateFlag=false;
      $scope.stf.postgraduateResearchFlag=false;
      $scope.stf.nonAwardFlag=true;
   }



 });