---
id: "en-php-function-function-syslog"
language: "php"
lang: "en"
category: "function"
name: "syslog"
title: "Generate a system log message"
signature: "true syslog(int $priority, string $message)"
module: "network"
source_url: "https://www.php.net/manual/en/function.syslog.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a system log message

## Description

```php
true syslog(int $priority, string $message)
```

`syslog()` generates a log message that will be distributed by the system logger.

For information on setting up a user defined log handler, see the syslog.conf 5 Unix manual page. More information on the syslog facilities and option can be found in the man pages for syslog 3 on Unix machines.

## Parameters

- **`$priority`** — One of the `LOG_EMERG` `LOG_ALERT` `LOG_CRIT` `LOG_ERR` `LOG_WARNING` `LOG_NOTICE` `LOG_INFO` `LOG_DEBUG` constants.
- **`$message`** — The message to send.

## Return Values

Always returns `true`.

## Examples

**Using `syslog()`**

```php


<?php
// open syslog, include the process ID and also send
// the log to standard error, and use a user defined
// logging mechanism
openlog("myScriptLog", LOG_PID | LOG_PERROR, LOG_LOCAL0);

// some code

if (authorized_client()) {
    // do something
} else {
    // unauthorized client!
    // log the attempt
    $access = date("Y/m/d H:i:s");
    syslog(LOG_WARNING, "Unauthorized client: $access {$_SERVER['REMOTE_ADDR']} ({$_SERVER['HTTP_USER_AGENT']})");
}

closelog();
?>

    
```

## Notes

On Windows, the syslog service is emulated using the Event Log.

> Use of `LOG_LOCAL0` through `LOG_LOCAL7` for the `$facility` parameter of `openlog()` is not available in Windows.

## See Also

`openlog()` `closelog()` syslog.filter INI setting (starting with PHP 7.3)
