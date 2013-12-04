<?php
	$mysqli = new mysqli("localhost", "root", "usbw");
	if ($mysqli->errno) 
	{
		print("geen verbining");
		exit();
	}
	else
	{
		if ($stmt = $mysqli->prepare("SELECT * FROM highscore ORDER BY game_time")) 
		{
			$stmt->execute();
			$result = $stmt->get_result();
			$arrResults = array();
			while ($row = $result->fet_array(MYSQL_NUM)) 
			{
				array_push($arrResults, $row)
			}
			echo json_encode($arrResults);
		}
	}
?>