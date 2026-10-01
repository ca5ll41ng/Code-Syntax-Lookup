---
id: "en-php-function-function-win32-set-service-exit-mode"
language: "php"
lang: "en"
category: "function"
name: "win32_set_service_exit_mode"
title: "Define or return the exit mode for the current running service"
signature: "bool win32_set_service_exit_mode(bool $gracefulMode = true)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-set-service-exit-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define or return the exit mode for the current running service

## Description

 {{{ 

```php
bool win32_set_service_exit_mode(bool $gracefulMode = true)
```

If `$gracefulMode` parameter is provided, the exit mode is changed. When the exit mode is not graceful, the exit code used can be set with the `win32_set_service_exit_code()` function.

> This function work only in "cli" SAPI. On other SAPI this function is disabled.

 }}} 

## Parameters

 {{{ 

- **`$gracefulMode`** — `true` for exit graceful. `false` for exit with error.

 }}} 

## Return Values

 {{{ 

Return the current or old exit mode.

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

 `win32_start_service_ctrl_dispatcher()` `win32_set_service_status()` `win32_set_service_exit_code()` 

 }}}
