<?php
	$mysqli = new mysqli("localhost", "root", "usbw", "webgame");

	if($mysqli->errno)
	{
		print "verbinding mislukt.";
		exit();
	}

	else
	{
		print "we hebben verbinding";
		$highscore_name = $_GET["highscore_name"];
		$highscore_score = $_GET["highscore_score"];
		$highscore_winner = $_GET["highscore_winner"];

		//$stmt = $mysqli->prepare("INSERT INTO highscore(game_name, game_time) VALUES (?,?)");
		$stmt = $mysqli->prepare("INSERT INTO highscore(highscores_name, highscores_winner, highscores_score) VALUES (?,?,?)");
		//$stmt->bind_param("si",$game_name,$game_time);
		$stmt->bind_param("ssi",$highscore_name, $highscore_winner,$highscore_score);
		$stmt->execute();
	}

?>