<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$query = $request->query;
@$code = $request->code;


   $host        = "host=127.0.0.1";
   $port        = "port=5432";
   $dbname      = "dbname=handbook";
   $credentials = "user=postgres password=postgres";

   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }

   $result = pg_query($db, "SELECT rul_t,title,appl,min,max,defn,raw_defn from active_rules where code ='$code'");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}


$streams = array();
$allelements = array();
//loop to get json format for datatables.
while ($row = pg_fetch_row($result)) {
  
  $temp = array("rul_t"=>$row[0],"title"=>$row[1],"appl"=>$row[2],"min"=>$row[3],"max"=>$row[4],"defn"=>$row[5],"raw_defn"=>$row[6]);
  
  array_push($allelements, $temp);
 
  if($row[0] == 'DS'){
    $t = array($row[6]);
    array_push($streams,$t);
  }
  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}
//var_dump($streams);
$req = $streams[0];
//echo $req[0];
$all = $req[0];
$allStreams = explode(',',$all);
//echo $allStreams[0];

$streamNames = array();
foreach ($allStreams as $value) {

    $r = pg_query($db, "SELECT name,code,ouname from active_objects where code ='$value'");
    $row1 = pg_fetch_row($r);
    $temp1 = array("name"=>$row1[0],"code"=>$row1[1],"school"=>$row1[2]);
  
  array_push($streamNames, $temp1);
}

var_dump($streamNames);

$stuff = array("data" => $allelements);
$s1 = array("data"=>$streamNames);

$data = json_encode($stuff);
$d = json_encode($s1);
$myFile = "../json/$query.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);


$file = "stream";
$myF = "../json/$file.json";
$fh1 = fopen($myF, 'w') or die("can't open file");
fwrite($fh1, $d);
fclose($fh1);
?>