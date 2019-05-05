<?php
$ville=$_GET['city'];
$curl = curl_init();
curl_setopt_array($curl, array(
	CURLOPT_URL => "https://pixabay.com/api?key=1743797-278213b0a52783b43f5900cf9&q=".$country."&lang=en",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
?>