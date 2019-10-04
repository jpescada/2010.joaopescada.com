<?php

//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 1000');

$name_txt = isset($_POST['a1']) ? $_POST['a1'] : null;
$email_txt = isset($_POST['a2']) ? $_POST['a2'] : null;
$needs_txt = isset($_POST['b1']) ? $_POST['b1'] : null;
$brief_txt = isset($_POST['b2']) ? $_POST['b2'] : null;
$budget_txt = isset($_POST['b3']) ? $_POST['b3'] : null;
$starting_txt = isset($_POST['b4']) ? $_POST['b4'] : null;
$referral_txt = isset($_POST['c1']) ? $_POST['c1'] : null;
$funnel_txt = isset($_POST['c2']) ? $_POST['c2'] : null;


function send()
{
	global $name_txt;
	global $email_txt;
	global $needs_txt;
	global $brief_txt;
	global $budget_txt;
	global $starting_txt;
	global $referral_txt;
	global $funnel_txt;

	$from_email = "no-reply@joaopescada.com";
	$from_name = "Idea Planner";
	
	if ( is_null($rate_txt) && is_null($email_txt) && is_null($message_txt) )
	{
		echo(2);
		return false;
	}
	
	if ( filter_var($email_txt, FILTER_VALIDATE_EMAIL) ) $from_email = $email_txt;
	if ( !is_null($name_txt) ) $from_name = $name_txt;
	

	// Send feedback to email
	$to = "joao@pescada.pt";
	$headers = "From: ". $from_name ." <". $from_email .">\r\n" .
			   "MIME-Version: 1.0\r\n" . 
			   "Content-type: text/plain; charset=UTF-8\r\n" .
			   "X-Mailer: PHP/" . phpversion();
	$subject = "=?UTF-8?B?".base64_encode("Contact via JoaoPescada.com")."?=";
	$message = "\r\n".
	"\r\n\r\n\r\n".
	$brief_txt ."\r\n\r\n\r\n".
	"Name: ". $name_txt ."\r\n".
	"Email: ". $email_txt  ."\r\n".
	"\r\n".
	"Needs help with: ". $needs_txt  ."\r\n".
	"\r\n".
	"Budget: ". $budget_txt  ."\r\n".
	"To start: ". $starting_txt  ."\r\n".
	"\r\n".
	"Referral: ". $referral_txt  ."\r\n".
	"Funnel: ". $funnel_txt  ."\r\n".
	"\r\n".
	"\r\n".
	"Proccessed on server ". $_SERVER["HTTP_HOST"] ." at ". date("H:i:s") ." of ". date("d-m-Y") .".";

	if( mail($to, $subject, $message, $headers) ) echo(0);
	else echo(1);

}


send();

?>


