<?php
$to= "peszel1@o2.pl";
$imie=$_POST['Imie'];
$subject = "Zapytanie ze strony www";
$email=$_POST['Email'];
$message=$_POST['Wiadmosc'];
$headers = "From:"+ $email;
if(mail($to,$subject,$message,$headers))
	echo "wiadmosc wyslana";
else
	echo "Blad-wiadomosc nie wyslana";
?>