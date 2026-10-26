<?php
namespace PHPMailer\PHPMailer;

/**
 * PHPMailer Exception Class
 */
class Exception extends \Exception
{
    /**
     * Error message formatter
     * @return string
     */
    public function errorMessage()
    {
        return '<strong>' . htmlspecialchars($this->getMessage(), ENT_COMPAT | ENT_HTML401) . '</strong><br />' . "\n";
    }
}
?>
