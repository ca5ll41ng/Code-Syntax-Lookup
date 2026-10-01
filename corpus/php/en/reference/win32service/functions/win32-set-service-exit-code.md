---
id: "en-php-function-function-win32-set-service-exit-code"
language: "php"
lang: "en"
category: "function"
name: "win32_set_service_exit_code"
title: "Define or return the exit code for the current running service"
signature: "int win32_set_service_exit_code(int $exitCode = 1)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-set-service-exit-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define or return the exit code for the current running service

## Description

 {{{ 

```php
int win32_set_service_exit_code(int $exitCode = 1)
```

Change or return the exit code. The exit code is used only if the exit mode is not graceful. If the value is not zero, the recovery configuration can be used after service fail. See [Microsoft system error codes]() for more details

> This function work only in "cli" SAPI. On other SAPI this function is disabled.

 }}} 

## Parameters

 {{{ 

- **`$exitCode`** — The return code used on exit.

 }}} 

## Return Values

 {{{ 

Return the current or old exit code.

 }}} 

## Errors/Exceptions

 {{{ 

Prior to version 1.0.0, if the SAPI is not `"cli"`, this function emits an `E_ERROR` level error.

As of version 1.0.0, will throw a `Win32ServiceException` if SAPI is not `"cli"`

 }}} 

## Changelog

 {{{ 

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |

 }}} 

## See Also

 {{{ 

 `win32_start_service_ctrl_dispatcher()` `win32_set_service_status()` `win32_set_service_exit_mode()` 

 }}}
