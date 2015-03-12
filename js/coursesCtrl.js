var app = angular.module('Control');
app.controller('coursesCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,tablesCreated,sendQuery){
   $scope.cslFlags = courseSelectionFLags.data;
   $scope.stf = studyTypeFlags.data;

   console.log($scope.stf.undergraduateFlag);
    //global variable that ensures each table is only created once
    $scope.tables=tablesCreated.data;
    // var pAZCreated = false;
    //    //tables for programs by faculty
    // var pfdbsCreated = false;
    // var pffadCreated = false;
    // var pffasCreated = false;
    // var pffbeCreated = false;
    // var pffeCreated = false;
    // var pfflCreated = false;
    // var pffmCreated = false;
    // var pffsCreated = false;
    // var pfubsCreated = false;
    // var pfadfaCreated = false;
    // //
    // var cAZCreated = false;
    // //
    // var csaCreated = false;
    // //
    // var sAZCreated = false;
    


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
      if($scope.tables.pAZCreated == false){
          sendQuery.sendPAZ().
             success(function(data, status, headers, config) {
              console.log('successfully sent php');
                $(document).ready(function() {
                  //initialises the datatable from the json object
                      pAZTable = $('#pAZTable').DataTable({
                                     "columnDefs": [
                                    { "width": "40%", "targets": 0 }
                                  ],
                                "ordering": true,
                                     "ajax": "json/programsAZ.json",
                                     "columns":[  
                                         {"data":"name"},
                                         {"data":"career"},  //must be the keys in the objects
                                         {"data":"code"}, 
                                         {"data":"ouname"}
                                     ],
                        
                                  });
                
               })
              //  pAZTable.on( 'click', 'tr', function () {
              //     if ( $(this).hasClass('selected') ) {
              //         $(this).removeClass('selected');
              //     }
              //     else {
              //         pAZTable.$('tr.selected').removeClass('selected');
              //         $(this).addClass('selected');
              //     }
              // } );
              pAZTable.on( 'click', 'tr', function () {
                
                $scope.cslFlags.clickedData = pAZTable.row( this ).data();
                 $("#select").trigger("click"); 
              })


  

            }). error(function(data, status, headers, config) {
              console.log('couldnt send request top php');
            })
          $scope.tables.pAZCreated = true;
      }


   };
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

             if($scope.tables.pfdbsCreated == false){
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
                $scope.tables.pfdbsCreated = true;
            }
            if($scope.tables.pffadCreated == false){
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
                $scope.tables.pffadCreated = true;
            }
            if($scope.tables.pffasCreated == false){
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
                $scope.tables.pffasCreated = true;
            }
            if($scope.tables.pffbeCreated == false){
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
                $scope.tables.pffbeCreated = true;
            }
            if($scope.tables.pffeCreated == false){
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
                $scope.tables.pffeCreated = true;
            }
            if($scope.tables.pfflCreated == false){
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
                $scope.tables.pfflCreated = true;
            }
            if($scope.tables.pffmCreated == false){
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
                $scope.tables.pffmCreated = true;
            }
            if($scope.tables.pffsCreated == false){
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
                $scope.tables.pffsCreated = true;
            }
            if($scope.tables.pfubsCreated == false){
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
                $scope.tables.pfubsCreated = true;
            }
            if($scope.tables.pfadfaCreated == false){
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
                $scope.tables.pfadfaCreated = true;
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
            if($scope.tables.cAZCreated == false){
             sendQuery.sendCAZ().
             success(function(data, status, headers, config) {
              console.log('successfully sent php');
                $(document).ready(function() {
                  //initialises the datatable from the json object
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
                
               })

              cAZTable.on( 'click', 'tr', function () {
                
                $scope.cslFlags.clickedData = cAZTable.row( this ).data();
                 $("#select").trigger("click"); 
              })


  

            }). error(function(data, status, headers, config) {
              console.log('couldnt send request top php');
            })
          $scope.tables.cAZCreated = true;
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
            if($scope.tables.csaCreated == false){
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
                   $scope.tables.csaCreated = true;
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
            if($scope.tables.sAZCreated == false){
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
                   $scope.tables.sAZCreated = true;
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