<?php
/**
 * Configuration for SMTP Email Delivery (Hostinger & Target Mail)
 */

// 1. Hostinger SMTP Settings (Sender)
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465); // 465 for SSL, 587 for TLS
define('SMTP_USER', 'aditya@dsdspl.com'); // 👈 Put your Hostinger Business Email here
define('SMTP_PASS', 'Aditya@2026'); // 👈 Put your Hostinger Email Password here
define('SMTP_FROM_NAME', 'Dr. Amit Mulay Website Leads');

// 2. Receiver Email (Jahan par form submit hone ke baad email aana chahiye - e.g. Gmail)
define('RECEIVER_EMAIL', 'dsdsystemspl@gmail.com'); // 👈 Put your Target Gmail / Clinic Email here
define('RECEIVER_NAME', 'Dr. Amit Mulay Practice');

// 3. Optional: CC Email (agar ek aur email par bhi copy chahiye)
define('CC_EMAIL', ''); // e.g. 'clinicmanager@gmail.com' (leave empty if not needed)
?
