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

   $result = pg_query($db, "SELECT code,rul_t,title,appl,min,max,defn,raw_defn from active_rules where code ='$code'");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}


$streams = array();
$allelements = array();
//loop to get json format for datatables.
while ($row = pg_fetch_row($result)) {
  
  $temp = array("code"=>$row[0],"rul_t"=>$row[1],"title"=>$row[2],"appl"=>$row[3],"min"=>$row[4],"max"=>$row[5],"defn"=>$row[6],"raw_defn"=>$row[7]);
  
  array_push($allelements, $temp);

}
$stuff = array("data" => $allelements);


$data = json_encode($stuff);


$myFile = "../json/$query.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);


?>