<?php

	$con = new mysqli("localhost", "root", "usbw", "webgame");
	if ($con->connect_errno) 
	{
		print("er is een error");
	}
?>