<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$query1 = $request->query1;
@$query2 = $request->query2;
@$query3 = $request->query3;
@$query4 = $request->query4;
@$query5 = $request->query5;
@$query6 = $request->query6;
@$query7 = $request->query7;
@$query8 = $request->query8;
@$query9 = $request->query9;
@$query10 = $request->query10;
@$SL = $request->SL;

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

 //for faculty of engineering  
$result1 = pg_query($db, "SELECT name,award_name,code from program_az_award where (career = '$SL' and rtype = 'PR') and(ouid = '89' or ouid = '112' or ouid = '69' or ouid = '75' or ouid = '106' or ouid = '136' or ouid = '180' or ouid = '176' or ouid = '195' or ouid = '213' or ouid = '480')");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query5.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

 //for faculty of law
$result1 = pg_query($db, "SELECT name,award_name,code from program_az_award where ouname ~* 'law' and rtype = 'PR' and career = '$SL'");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query6.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

 //for faculty of medicine
$result1 = pg_query($db, "SELECT name,award_name,code from program_az_award where ouname ~* 'medicine' and rtype = 'PR' and career = '$SL'");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query7.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

//for faculty of science
$result1 = pg_query($db, "SELECT name,award_name,code from program_az_award where ouname ~* 'of science' and rtype = 'PR' and career = '$SL'");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query8.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

//for business school
$result1 = pg_query($db, "SELECT name,award_name,code,ouname from program_az_award where ouname ~* 'unsw business school' and rtype = 'PR' and career = '$SL'");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query9.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

//for ADFA
$result1 = pg_query($db, "SELECT name,award_name,code,ouname from program_az_award where ouname ~* 'adfa' and rtype = 'PR' and career = '$SL'");

if (!$result1) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row1 = pg_fetch_row($result1)) {

  $temp = array("program title"=>$row1[0],"award level"=>$row1[1],"code"=>$row1[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query10.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);

//for faculty of built environment
   $result = pg_query($db, "SELECT name,award_name,code from program_az_award where ouid = '64' and career = '$SL' and rtype = 'PR'");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}



$allelements = array();
//loop to get json format for datatables.
while ($row = pg_fetch_row($result)) {

  $temp = array("program title"=>$row[0],"award level"=>$row[1],"code"=>$row[2]);
 
  array_push($allelements, $temp);

  // echo "$row[0]   $row[1] $row[2] $row[3]";
  // echo "<br />\n";
}

$stuff = array("data" => $allelements);


$data = json_encode($stuff);

$myFile = "../json/$query4.json";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);



?>