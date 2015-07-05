var app = angular.module('Control');
app.controller('coursesCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,tablesCreated,sendQuery,programTypeSelect){
   $scope.cslFlags = courseSelectionFLags.data;
   $scope.stf = studyTypeFlags.data;
   $scope.progType = programTypeSelect.data;
   console.log($scope.stf.undergraduateFlag);
    //global variable that ensures each table is only created once
    //$scope.tables=tablesCreated.data;
         pAZCreated = false;
                     //tables for programs by faculty
                  pfdbsCreated = false;
                  pffadCreated = false;
                  pffasCreated = false;
                  pffbeCreated = false;
                  pffeCreated = false;
                  pfflCreated = false;
                  pffmCreated = false;
                  pffsCreated = false;
                  pfubsCreated = false;
                  pfadfaCreated = false;
                  //
                  cAZCreated = false;
                  //
                  csaCreated = false;
                  //
                  STCreated = false;
    





  

   // check the flag for postgrad,undergrad... then send the correct reposne to php to query the database and create 
   //relevant json object to load into datatable
      if(pAZCreated == false){
          sendQuery.sendPAZ().
             success(function(data, status, headers, config) {
              console.log('successfully sent php');
                $(document).ready(function() {
                  //initialises the datatable from the json object
                      pAZTable = $('#pAZTable').DataTable({
                                     "columnDefs": [
                                   // { "width": "50%", "targets": 0 }
                                  ],
                                "ordering": true,
                                     "ajax": "json/programsAZ.json",
                                     "columns":[  
                                         {"data":"name"},
                                         {"data":"career"},  //must be the keys in the objects
                                         {"data":"rtype"},
                                         {"data":"code"}, 
                                         {"data":"ouname"},
                                     ],
                        
                                  });
                
               })

              pAZTable.on( 'click', 'tr', function () {
                console.log("im am cehcked this");
                $scope.cslFlags.clickedData = pAZTable.row( this ).data();  
               // $scope.cslFlags.rulesCode =  $scope.cslFlags.clickedData.code; 
                if($scope.cslFlags.clickedData.rtype == 'PR'){
                  //retrieves the rules for this program

                  //do checking here for if PR or DA set a flag
                  sendQuery.sendRule().
                         success(function(data, status, headers, config) {
                             console.log(data);

                           }). error(function(data, status, headers, config) {
                              console.log('couldnt send request top php');
                            })

                  $("#selectProgram").trigger("click"); 
                }
                // if($scope.cslFlags.clickedData.rtype == 'CS'){
                //   sendQuery.sendRule().
                //          success(function(data, status, headers, config) {
                //              console.log(data);

                //            }). error(function(data, status, headers, config) {
                //               console.log('couldnt send request top php');
                //             })

                //   $("#selectCourse").trigger("click"); 
                // }
              })


  

            }). error(function(data, status, headers, config) {
              console.log('couldnt send request top php');
            })
          pAZCreated = true;
      } //end PAZ Created

     if(STCreated == false){
          sendQuery.sendST().
             success(function(data, status, headers, config) {
              console.log('successfully sent php');
                $(document).ready(function() {
                  //initialises the datatable from the json object
                      STTable = $('#STTable').DataTable({
                                     "columnDefs": [
                                    //{ "width": "40%", "targets": 0 }
                                  ],
                                "ordering": true,
                                     "ajax": "json/streams.json",
                                     "columns":[  
                                         {"data":"name"},
                                         {"data":"career"},  //must be the keys in the objects
                                         {"data":"rtype"},
                                         {"data":"code"}, 
                                         {"data":"ouname"},
                                     ],
                        
                                  });
                
               })

              STTable.on( 'click', 'tr', function () {
                console.log("im am cehcked this");
                $scope.cslFlags.clickedData = STTable.row( this ).data();  
               // $scope.cslFlags.rulesCode =  $scope.cslFlags.clickedData.code; 
                if($scope.cslFlags.clickedData.rtype == 'PR'){
                  sendQuery.sendRule().
                         success(function(data, status, headers, config) {
                             console.log(data);

                           }). error(function(data, status, headers, config) {
                              console.log('couldnt send request top php');
                            })

                  $("#selectProgram").trigger("click"); 
                }
                if($scope.cslFlags.clickedData.rtype == 'CS'){
                  sendQuery.sendRule().
                         success(function(data, status, headers, config) {
                             console.log(data);

                           }). error(function(data, status, headers, config) {
                              console.log('couldnt send request top php');
                            })

                  $("#selectCourse").trigger("click"); 
                }
              })


  

            }). error(function(data, status, headers, config) {
              console.log('couldnt send request top php');
            })
          STCreated = true;
      } // End ST Created





   
         $(document).ready(function() {
            if(cAZCreated == false){
             sendQuery.sendCAZ().
             success(function(data, status, headers, config) {
              console.log('successfully sent php');
                $(document).ready(function() {
                  //initialises the datatable from the json object
                       cAZTable = $('#cAZTable').DataTable({
                                  "columnDefs": [
                               //  { "width": "40%", "targets": 0 }
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
                if($scope.cslFlags.clickedData.code){
                   $("#select").trigger("click"); 
                }
              })


  

            }). error(function(data, status, headers, config) {
              console.log('couldnt send request top php');
            })
          cAZCreated = true;
      }

         });
 


   



 });