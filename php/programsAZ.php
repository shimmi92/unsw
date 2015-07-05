<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$query = $request->query;
@$SL = $request->SL;
echo $SL;
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

   $result = pg_query($db, "SELECT name,career,rtype,code,ouname from active_objects where rtype = 'PR' and career = '$SL'");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row = pg_fetch_row($result)) {
  
  $temp = array("name"=>$row[0],"career"=>$row[1],"rtype"=>$row[2],"code"=>$row[3],"ouname"=>$row[4]);
 
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