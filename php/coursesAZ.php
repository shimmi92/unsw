<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$query = $request->query;

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

   $result = pg_query($db, "SELECT code,name,uoc from courses_az where rtype = 'CS' and career = 'UG'");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row = pg_fetch_row($result)) {

  $temp = array("code"=>$row[0],"course title"=>$row[1],"uoc"=>$row[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh)
?>