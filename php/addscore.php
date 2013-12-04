<?php
$mysqli = new mysqli("localhost","root","usbw");

if($mysqli->errno)
{
	print "verbinding mislukt.";
	exit();
}

else
{
	$game_name = $_GET["game_name"];
	$game_time = $_GET["game_time"];

	$stmt = $mysqli->prepare("INSERT INTO highscore(game_name, game_time) VALUES (?,?)");
	$stmt->bind_param("si",$game_name,$game_time);
	$stmt->execute();
}


?>