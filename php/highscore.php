<?php
	error_reporting(E_ALL);
ini_set('display_errors', 'on');

	$mysqli = new mysqli("localhost", "root", "usbw", "webgame");
	if ($mysqli->errno) 
	{
		print("geen verbining");
		exit();
	}
	else
	{		
		$query = "SELECT * FROM highscore ORDER BY highscores_score ASC LIMIT 5";
		$result = $mysqli->query($query);
		
		if ($result) 
		{
		
				while ($row = $result->fetch_array(MYSQL_ASSOC)) 
				{
					$jsonarr[] = $row;	
								
				}
				echo json_encode($jsonarr);
		}	
		
	}
?>