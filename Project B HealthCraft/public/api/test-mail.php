<?php
/**
 * Quick SMTP Test Script
 * Browser me directly open karke test karne ke liye: https://yourdomain.com/api/test-mail.php
 */

require_once __DIR__ . '/config.php';

header("Content-Type: text/html; charset=UTF-8");

echo "<h2>Testing Hostinger SMTP Connection...</h2>";
echo "<p><strong>SMTP Server:</strong> " . SMTP_HOST . ":" . SMTP_PORT . "</p>";
echo "<p><strong>Testing Account:</strong> " . SMTP_USER . "</p>";
echo "<p><strong>Target Receiver:</strong> " . RECEIVER_EMAIL . "</p><hr/>";

$prefix = (SMTP_PORT == 465) ? 'ssl://' : '';
$socket = @fsockopen($prefix . SMTP_HOST, SMTP_PORT, $errno, $errstr, 10);

if (!$socket) {
    echo "<h3 style='color:red;'>❌ Connection Failed: $errstr ($errno)</h3>";
    exit();
}

$response = fgets($socket, 515);
fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
while ($line = fgets($socket, 515)) {
    if (substr($line, 3, 1) == " ") break;
}

fputs($socket, "AUTH LOGIN\r\n");
fgets($socket, 515);

fputs($socket, base64_encode(SMTP_USER) . "\r\n");
fgets($socket, 515);

fputs($socket, base64_encode(SMTP_PASS) . "\r\n");
$authRes = fgets($socket, 515);

if (substr($authRes, 0, 3) == "235") {
    echo "<h3 style='color:green;'>✅ PASSWORD IS 100% CORRECT! (Authentication Successful)</h3>";
    echo "<p>Hostinger SMTP credentials bilkul sahi kaam kar rahe hain.</p>";
} else {
    echo "<h3 style='color:red;'>❌ PASSWORD OR USERNAME IS INCORRECT!</h3>";
    echo "<p><strong>Server Response:</strong> " . htmlspecialchars($authRes) . "</p>";
    echo "<p>Kripya Hostinger Webmail (mail.hostinger.com) me login karke password confirm karein.</p>";
}

fputs($socket, "QUIT\r\n");
fclose($socket);
?>
