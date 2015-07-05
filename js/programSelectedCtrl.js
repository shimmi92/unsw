var app = angular.module('Control');
app.controller('programSelectedCtrl', function ($scope,courseSelectionFLags,studyTypeFlags,sendQuery,$http){
    console.log("programselectedctrl");
    $scope.cslFlags = courseSelectionFLags.data;
    $scope.stf = studyTypeFlags.data;
    console.log($scope.cslFlags.clickedData);

    selectStreamSingleTableCreated = false;

    $http.post('json/programRules.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;     
      console.log(data);
      console.log("successfully read the results");
    }).
    error(function(data, status, headers, config) {
      // log error
    });

    if(selectStreamSingleTableCreated  == false){
                $(document).ready(function() {
                  //initialises the datatable from the json object
                      selectStreamSingleTable  = $('#selectStreamSingleTable').DataTable({
                                     "columnDefs": [
                                   // { "width": "50%", "targets": 0 }
                                  ],
                                "ordering": true,
                                     "ajax": "json/stream.json",
                                     "columns":[  
                                         {"data":"name"},
                                         {"data":"code"},  //must be the keys in the objects
                                         {"data":"school"},
                                 
                                     ],
                        
                     });

                      selectStreamSingleTable.on( 'click', 'tr', function () {
                            if ( $(this).hasClass('selected') ) {
                                $(this).removeClass('selected');
                            }
                            else {
                                selectStreamSingleTable.$('tr.selected').removeClass('selected');
                                $(this).addClass('selected');
                            }
                           $scope.cslFlags.streamData = selectStreamSingleTable.row( this ).data();
                     

                      })
                
               })

       selectStreamSingleTableCreated = true;
    }

    $scope.getStreamRules = function(){
          sendQuery.sendStreamRules1().
                         success(function(data, status, headers, config) {
                             console.log(data);

                         }). error(function(data, status, headers, config) {
                              console.log('couldnt send request top php');
                         })
    }




});