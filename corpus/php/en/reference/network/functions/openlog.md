---
id: "en-php-function-function-openlog"
language: "php"
lang: "en"
category: "function"
name: "openlog"
title: "Open connection to system logger"
signature: "true openlog(string $prefix, int $flags, int $facility)"
module: "network"
source_url: "https://www.php.net/manual/en/function.openlog.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open connection to system logger

## Description

```php
true openlog(string $prefix, int $flags, int $facility)
```

`openlog()` opens a connection to the system logger for a program.

The use of `openlog()` is optional. It will automatically be called by `syslog()` if necessary, in which case `$prefix` will default to the empty string.

## Parameters

- **`$prefix`** — The string `$prefix` is added to each message.
- **`$flags`** — Bitmask of the following constants: `LOG_CONS` `LOG_NDELAY` `LOG_ODELAY` `LOG_NOWAIT` `LOG_PERROR` `LOG_PID`
- **`$facility`** — The `$facility` argument is used to specify what type of program is logging the message. This lets the configuration file specify that messages from different facilities will be handled differently. Must be one of the following constants: `LOG_AUTH` `LOG_AUTHPRIV` `LOG_CRON` `LOG_DAEMON` `LOG_KERN` `LOG_LOCAL{[0-7]}` `LOG_LPR` `LOG_MAIL` `LOG_NEWS` `LOG_SYSLOG` `LOG_USER` `LOG_UUCP`
  > This parameter is ignored on Windows.



## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The function now always returns `true`. Previously it returned `false` on failure. |

## See Also

`syslog()` `closelog()`
