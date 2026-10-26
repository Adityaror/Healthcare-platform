<?php
/**
 * Direct Hostinger SMTP Email Handler
 * Standalone, zero-dependency, zero-install SMTP client
 * Built specifically for Hostinger & cPanel hosting environments.
 */

// Enable CORS for React frontend requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit();
}

// Load Configuration
require_once __DIR__ . '/config.php';

// Get and decode JSON input
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No form data received."]);
    exit();
}

// Extract and sanitize input fields
$name      = !empty($data['name']) ? htmlspecialchars(trim($data['name'])) : '';
$phone     = !empty($data['phone']) ? htmlspecialchars(trim($data['phone'])) : '';
$email     = !empty($data['email']) ? htmlspecialchars(trim($data['email'])) : 'Not Provided';
$procedure = !empty($data['procedure']) ? htmlspecialchars(trim($data['procedure'])) : 'General Clinical Consultation';
$date      = !empty($data['date']) ? htmlspecialchars(trim($data['date'])) : date('d M Y, h:i A');
$notes     = !empty($data['notes']) ? htmlspecialchars(trim($data['notes'])) : (!empty($data['message']) ? htmlspecialchars(trim($data['message'])) : 'No additional medical notes provided.');
$source    = !empty($data['source']) ? htmlspecialchars(trim($data['source'])) : 'Website Consultation Portal';
$consultationType = !empty($data['consultation_type']) ? htmlspecialchars(trim($data['consultation_type'])) : 'In-Clinic Visit';

// Validation
if (empty($name) || empty($phone)) {
    echo json_encode(["status" => "error", "message" => "Patient Name and Phone number are required."]);
    exit();
}

// Build Subject & HTML Body
$subject = "New " . ($consultationType === 'Video Consultation' ? '[VIDEO CONSULTATION]' : 'Appointment') . ": " . $name . " - " . $procedure;

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4ede2; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eedfcb; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #1f1b16 0%, #2e261d 100%); color: #ffffff; padding: 24px 20px; text-align: center; border-bottom: 3px solid #c5932b; }
    .header h1 { margin: 0; font-size: 20px; color: #dfba79; font-weight: 700; letter-spacing: 1px; }
    .header p { margin: 6px 0 0; font-size: 12px; color: #e0d5c1; }
    .content { padding: 24px; color: #2c261e; }
    .badge { display: inline-block; background: #f5efe3; color: #916922; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; border: 1px solid #eedfcb; margin-bottom: 15px; }
    .field-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .field-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #f0e6d6; vertical-align: top; }
    .field-table .label { width: 35%; font-weight: bold; color: #6e6355; }
    .field-table .value { width: 65%; color: #1f1b16; font-weight: 600; }
    .notes-box { background: #fdfbf7; border-left: 4px solid #c5932b; padding: 12px 14px; border-radius: 4px; font-size: 13px; color: #3d3429; line-height: 1.5; margin-top: 12px; }
    .cta-btn { display: inline-block; background: #1f1b16; color: #dfba79; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: bold; margin-top: 15px; }
    .footer { background: #fbf8f2; padding: 14px 20px; text-align: center; font-size: 11px; color: #8c7f70; border-top: 1px solid #eedfcb; }
</style>
</head>
<body>
<div class='container'>
    <div class='header'>
        <h1>DR. AMIT MULAY</h1>
        <p>Plastic, Reconstructive & Cosmetic Surgery Lead Alert</p>
    </div>
    <div class='content'>
        <div class='badge'>NEW BOOKING REQUEST</div>
        <table class='field-table'>
            <tr>
                <td class='label'>Patient Name:</td>
                <td class='value'>" . $name . "</td>
            </tr>
            <tr>
                <td class='label'>Consultation Mode:</td>
                <td class='value' style='color: #8b1e1e; font-weight: bold;'>" . $consultationType . "</td>
            </tr>
            <tr>
                <td class='label'>Phone Number:</td>
                <td class='value'><a href='tel:" . $phone . "' style='color: #916922; font-size: 14px; text-decoration: none; font-weight: bold;'>" . $phone . "</a></td>
            </tr>
            <tr>
                <td class='label'>Email Address:</td>
                <td class='value'>" . $email . "</td>
            </tr>
            <tr>
                <td class='label'>Procedure Interest:</td>
                <td class='value' style='color: #c5932b;'>" . $procedure . "</td>
            </tr>
            <tr>
                <td class='label'>Submission Time:</td>
                <td class='value'>" . date('d M Y, h:i A') . "</td>
            </tr>
        </table>
        
        <div style='margin-top: 16px;'>
            <strong style='font-size: 12px; color: #6e6355; text-transform: uppercase;'>Clinical Notes / Symptoms:</strong>
            <div class='notes-box'>" . nl2br($notes) . "</div>
        </div>

        <div style='text-align: center;'>
            <a href='tel:" . $phone . "' class='cta-btn'>📞 Call Patient: " . $phone . "</a>
        </div>
    </div>
    <div class='footer'>
        Lead captured via Dr. Amit Mulay Official Website Portal (" . $source . ")
    </div>
</div>
</body>
</html>
";

/**
 * Direct SMTP Socket Sender Function for Hostinger
 */
function sendHostingerSMTP($to, $subject, $htmlMessage, $replyToEmail = null, $replyToName = null) {
    $host = SMTP_HOST;
    $port = SMTP_PORT; // 465 for SSL, 587 for TLS
    $user = SMTP_USER;
    $pass = SMTP_PASS;
    $fromName = SMTP_FROM_NAME;

    $prefix = ($port == 465) ? 'ssl://' : '';
    $socket = @fsockopen($prefix . $host, $port, $errno, $errstr, 15);

    if (!$socket) {
        return ["success" => false, "error" => "Could not connect to SMTP server: $errstr ($errno)"];
    }

    $response = fgets($socket, 515);

    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == " ") break;
    }

    if ($port == 587) {
        fputs($socket, "STARTTLS\r\n");
        $res = fgets($socket, 515);
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
        while ($line = fgets($socket, 515)) {
            if (substr($line, 3, 1) == " ") break;
        }
    }

    fputs($socket, "AUTH LOGIN\r\n");
    $res = fgets($socket, 515);

    fputs($socket, base64_encode($user) . "\r\n");
    $res = fgets($socket, 515);

    fputs($socket, base64_encode($pass) . "\r\n");
    $res = fgets($socket, 515);

    if (substr($res, 0, 3) != "235") {
        fclose($socket);
        return ["success" => false, "error" => "SMTP Authentication failed. Please check SMTP_USER and SMTP_PASS in config.php."];
    }

    fputs($socket, "MAIL FROM: <$user>\r\n");
    $res = fgets($socket, 515);

    fputs($socket, "RCPT TO: <$to>\r\n");
    $res = fgets($socket, 515);

    if (defined('CC_EMAIL') && !empty(CC_EMAIL)) {
        fputs($socket, "RCPT TO: <" . CC_EMAIL . ">\r\n");
        fgets($socket, 515);
    }

    fputs($socket, "DATA\r\n");
    $res = fgets($socket, 515);

    $boundary = md5(uniqid(time()));
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "From: $fromName <$user>\r\n";
    $headers .= "To: <$to>\r\n";
    if ($replyToEmail && filter_var($replyToEmail, FILTER_VALIDATE_EMAIL)) {
        $headers .= "Reply-To: $replyToName <$replyToEmail>\r\n";
    }
    if (defined('CC_EMAIL') && !empty(CC_EMAIL)) {
        $headers .= "Cc: <" . CC_EMAIL . ">\r\n";
    }
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n\r\n";

    $messageBody = $headers . chunk_split(base64_encode($htmlMessage)) . "\r\n.\r\n";

    fputs($socket, $messageBody);
    $res = fgets($socket, 515);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    if (substr($res, 0, 3) == "250") {
        return ["success" => true];
    } else {
        return ["success" => false, "error" => "SMTP Error: " . $res];
    }
}

// Execute Email Send
$replyTo = (!empty($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) ? $data['email'] : null;
$result = sendHostingerSMTP(RECEIVER_EMAIL, $subject, $htmlBody, $replyTo, $name);

if ($result['success']) {
    echo json_encode([
        "status" => "success",
        "message" => "Appointment consultation request submitted successfully!"
    ]);
} else {
    // Fallback using standard mail() if socket is restricted
    $stdHeaders  = "MIME-Version: 1.0\r\n";
    $stdHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
    $stdHeaders .= "From: " . SMTP_FROM_NAME . " <" . SMTP_USER . ">\r\n";
    if ($replyTo) {
        $stdHeaders .= "Reply-To: " . $name . " <" . $replyTo . ">\r\n";
    }

    $fallbackSent = @mail(RECEIVER_EMAIL, $subject, $htmlBody, $stdHeaders);

    if ($fallbackSent) {
        echo json_encode([
            "status" => "success",
            "message" => "Appointment booked successfully via fallback mail."
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => $result['error']
        ]);
    }
}
?>
