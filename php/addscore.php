<?php
// $mysqli = new mysqli("mysqlstudent ","yoranbroodpho7ha","Cieluuchah4i", "yoranbroodpho7ha", 3306);

// if($mysqli->errno)
// {
	// print "verbinding mislukt.";
	// exit();
// }

// else
// {
	// print "we hebben verbinding";
	// $highscore_name = $_GET["highscore_name"];
	// $highscore_score = $_GET["highscore_score"];
	// $highscore_winner = $_GET["highscore_winner"];


// //	$stmt = $mysqli->prepare("INSERT INTO highscore(game_name, game_time) VALUES (?,?)");
	// $stmt = $mysqli->prepare("INSERT INTO highscore(highscores_name, highscores_winner, highscores_score) VALUES (?,?,?)");
	// //$stmt->bind_param("si",$game_name,$game_time);
	// $stmt->bind_param("ssi",$highscore_name, $highscore_winner,$highscore_score);
	// $stmt->execute();
// }

	// Create connection
	$username = "yoranbroodpho7ha";
	$password = "Cieluuchah4i";
	$hostname = "mysqlstudent"; 
	
	//connection to the database
	$con = mysql_connect($hostname, $username, $password) 
	 or die("Geen verbinding met server");
	echo "Verbonden met server<br>";

	//select a database to work with
	$selected = mysql_select_db("yoranbroodpho7ha",$con) 
	  or die("Kan niet met database verbinden");

	 //vars
	$highscore_name = $_GET["highscore_name"];
	$highscore_score = $_GET["highscore_score"];
	$highscore_winner = $_GET["highscore_winner"];	 
	  
	//execute the SQL query and return records
	$result = mysql_query("INSERT INTO `highscore`(`highscores_name`, `highscores_winner`, `highscores_score`) VALUES ('$highscore_name','$highscore_winner','$highscore_score')");


  

?>