var app = angular.module('Control');
app.controller('coursesCtrl', function ($scope,courseSelectionFLags,studyTypeFlags){
   $scope.cslFlags = courseSelectionFLags.data;
   $scope.stf = studyTypeFlags.data;

   console.log($scope.stf.undergraduateFlag);
    //global variable that ensures each table is only created once
    var pAZCreated = false;
       //tables for programs by faculty
    var pfdbsCreated = false;
    var pffadCreated = false;
    var pffasCreated = false;
    var pffbeCreated = false;
    var pffeCreated = false;
    var pfflCreated = false;
    var pffmCreated = false;
    var pffsCreated = false;
    var pfubsCreated = false;
    var pfadfaCreated = false;
    //
    var cAZCreated = false;
    //
    var csaCreated = false;
    //
    var sAZCreated = false;

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
   $(document).ready(function() {
      //initialises the datatable from the json object

       if(pAZCreated == false){
          pAZTable1 = $('#pAZTable').DataTable({
                         "columnDefs": [
                        { "width": "40%", "targets": 0 }
                      ],
                    "ordering": true,
                         "ajax": "json/programsAZ.json",
                         "columns":[  
                             {"data":"program title"},
                             {"data":"award level"},  //must be the keys in the objects
                             {"data":"code"}, 
                             {"data":"faculty"}
                         ],
            
                      });
          pAZCreated = true;
      }
   });

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

         $(document).ready(function() {
        //initialises the datatables from the json objects created from php database query only once

             if(pfdbsCreated == false){
                dbsTable = $('#dbsTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pfdbsCreated = true;
            }
            if(pffadCreated == false){
                fadTable = $('#fadTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffadCreated = true;
            }
            if(pffasCreated == false){
                fasTable = $('#fasTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffasCreated = true;
            }
            if(pffbeCreated == false){
                fbeTable = $('#fbeTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffbeCreated = true;
            }
            if(pffeCreated == false){
                feTable = $('#feTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffeCreated = true;
            }
            if(pfflCreated == false){
                flTable = $('#flTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pfflCreated = true;
            }
            if(pffmCreated == false){
                fmTable = $('#fmTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffmCreated = true;
            }
            if(pffsCreated == false){
                fsTable = $('#fsTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pffsCreated = true;
            }
            if(pfubsCreated == false){
                ubsTable = $('#ubsTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pfubsCreated = true;
            }
            if(pfadfaCreated == false){
                adfaTable = $('#adfaTable').DataTable({
                               "columnDefs": [
                              { "width": "40%", "targets": 0 }
                            ],
                          "ordering": true,
                               "ajax": "json/progFaculty(1-10).json",
                               "columns":[  
                                   {"data":"program title"},
                                   {"data":"award level"},  //must be the keys in the objects
                                   {"data":"code"}, 
                               ],
                  
                            });
                pfadfaCreated = true;
            }

         });
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

         $(document).ready(function() {
            if(cAZCreated == false){
                   cAZTable = $('#cAZTable').DataTable({
                                  "columnDefs": [
                                 { "width": "40%", "targets": 0 }
                               ],
                             "ordering": true,
                                  "ajax": "json/coursesAZ.json",
                                  "columns":[  
                                      {"data":"code"},
                                      {"data":"course title"},  //must be the keys in the objects
                                      {"data":"uoc"}, 
                                  ],
                     
                               });
                   cAZCreated = true;
               }
         });
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

         $(document).ready(function() {
            if(csaCreated == false){
                   csaTable = $('#csaTable').DataTable({
                                  "columnDefs": [
                                 { "width": "40%", "targets": 0 }
                               ],
                             "ordering": true,
                                  "ajax": "json/csa.json",
                                  "columns":[  
                                      {"data":"subject area"},
                                  ],
                     
                               });
                   csaCreated = true;
               }
         });
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

         $(document).ready(function() {
            if(sAZCreated == false){
                   sAZTable = $('#sAZTable').DataTable({
                                  "columnDefs": [
                                 { "width": "40%", "targets": 0 }
                               ],
                             "ordering": true,
                                  "ajax": "json/sAZ.json",
                                  "columns":[  
                                      {"data":"specialisation"},
                                      {"data":"description"}
                                  ],
                     
                               });
                   sAZCreated = true;
               }
         });
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