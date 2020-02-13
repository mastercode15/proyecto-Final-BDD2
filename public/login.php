<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "logindb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
if(isset($_POST['log'])){
	$username = mysqli_real_escape_string($conn,$_POST['email']);
	$passwd = mysqli_real_escape_string($conn,$_POST['password']);

	if($username!="" && $passwd!=""){
		$sql = "Select id from login where email ='$username' and password = '$passwd'";
		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
		
		$count = =money_num_rows($result);
		if($count==1){
			echo ('mision cumplida')
		}
	}
}

