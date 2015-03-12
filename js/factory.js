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
//factory to hold the values that control the divs on course page
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
               glossaryFlag:false,
               clickedData:undefined

                      }
         return vars;

 })
//holds instances of tables
.factory('tablesCreated', function ($rootScope){
         var vars = $rootScope.$new(true);
         vars.data = {
                  pAZCreated : false,
                     //tables for programs by faculty
                  pfdbsCreated : false,
                  pffadCreated : false,
                  pffasCreated : false,
                  pffbeCreated : false,
                  pffeCreated : false,
                  pfflCreated : false,
                  pffmCreated : false,
                  pffsCreated : false,
                  pfubsCreated : false,
                  pfadfaCreated : false,
                  //
                  cAZCreated : false,
                  //
                  csaCreated : false,
                  //
                  sAZCreated : false,

                      }
         return vars;

 })
//factory for psotggrad or undergrad or...
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
//factory to connect to database
.factory('sendQuery',['$http', function($http,authInfo,globalVars){
     
     var sendQuery = {};

     sendQuery.sendPAZ = function(){
      console.log('calledsend');
       return $http({
            method: "post",
            url: "php/programsAZ.php",
            data: {
               "query":"programsAZ"
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
 
     };

     sendQuery.sendCAZ = function(){
      console.log('calledsend');
       return $http({
            method: "post",
            url: "php/coursesAZ.php",
            data: {
               "query":"coursesAZ"
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
 
     };

     return sendQuery;
}])

;