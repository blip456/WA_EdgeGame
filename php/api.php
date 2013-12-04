<?php

	include_once('connect.php');

	$sql = "INSERT INTO highscore (game_name, game_time) VALUES ('joske',20);";
	$result = $con->query($sql);
?>