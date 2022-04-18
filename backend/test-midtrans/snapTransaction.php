<?php

require 'vendor/autoload.php';
// Set your Merchant Server Key
\Midtrans\Config::$serverKey = 'SB-Mid-server-LW2bGz1MRzIXEOjQl99z-EzS';
// Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
\Midtrans\Config::$isProduction = false;
// Set sanitization on (default)
\Midtrans\Config::$isSanitized = true;
// Set 3DS transaction for credit card to true
\Midtrans\Config::$is3ds = true;

$params = array(
    'transaction_details' => array(
        'order_id' => rand(),
        'gross_amount' => 9000000,
    ),
    'customer_details' => array(
        'first_name' => 'Hanif Fauzi',
        'last_name' => 'Hakim',
        'email' => 'haniffauzihakim@example.com',
        'phone' => '08111222333',
    ),
);

// $snapToken = \Midtrans\Snap::getSnapToken($params);
$snapUrlRedirect = \Midtrans\Snap::createTransaction($params)->redirect_url;

echo $snapUrlRedirect;
