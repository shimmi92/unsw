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
//holds the value for the study level selected
.factory('studyLevel', function ($rootScope){
         var vars = $rootScope.$new(true);
         vars.data = {
                selectedStudyLevel: ""

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
.factory('sendQuery',['$http','studyLevel', function($http,studyLevel){
     
     var sendQuery = {};
    
     sendQuery.sendPAZ = function(){
        console.log(studyLevel.data.selectedStudyLevel);
      console.log('calledsend');
       return $http({
            method: "post",
            url: "php/programsAZ.php",
            data: {
               "query":"programsAZ",
               "SL":studyLevel.data.selectedStudyLevel, 

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
               "query":"coursesAZ",
               "SL":studyLevel.data.selectedStudyLevel,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
 
     };
     sendQuery.sendFaculty = function(){
      console.log('calledsendfaculty');
       return $http({
            method: "post",
            url: "php/programsFaculty.php",
            data: {
               "query1":"dbs",
               "query2":"fad",
               "query3":"fas",
               "query4":"fbe",
               "query5":"fe",
               "query6":"fl",
               "query7":"fm",
               "query8":"fs",
               "query9":"ubs",
               "query10":"adfa",
               "SL":studyLevel.data.selectedStudyLevel,

            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
 
     };
     

     return sendQuery;
}])

;