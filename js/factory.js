var app = angular.module('Control');
app.factory('quickLinkFlags', function ($rootScope){
         var vars = $rootScope.$new(true);
         vars.data = {
         	   moodleFlag:false,
         	   duaFlag:false,
         	   dpqFlag:false,
         	   lecRecordingsFlag:false,
         	   resApplicantsFlag:false,
         	   applyOnlineFlag:false,
         	   intApplicantsFlag:false,
         	   feesFlag:false,
         	   academicCalFlag:false,
         	   feeEstimatorFlag:false

                      }
         return vars;

 })
.factory('courseSelectionFLags', function ($rootScope){
         var vars = $rootScope.$new(true);
         vars.data = {
               pAZFlag:true,
               pFFlag:false,
               cAZFlag:false,
               csaFlag:false,
               sAZFlag:false,
               aoiFlag:false,
               careersFlag:false,
               grsiFlag:false,
               fsFlag:false,
               ctFlag:false,
               glossaryFlag:false

                      }
         return vars;

 })
.factory('studyTypeFlags', function ($rootScope){
         var vars = $rootScope.$new(true);
         vars.data = {
               undergraduateFlag:false,
               postgraduateFlag:false,
               postgraduateResearchFlag:false,
               nonAwardFlag:false
                      }
         return vars;

 })
;