---
id: "en-php-function-function-win32-set-service-pause-resume-state"
language: "php"
lang: "en"
category: "function"
name: "win32_set_service_pause_resume_state"
title: "Define or return the pause/resume capability for the current running service"
signature: "bool win32_set_service_pause_resume_state(bool $state = true)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-set-service-pause-resume-state.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define or return the pause/resume capability for the current running service

## Description

 {{{ 

```php
bool win32_set_service_pause_resume_state(bool $state = true)
```

If `$state` parameter is provided, the pause/resume capability is changed.

> This function work only in "cli" SAPI and in the Windows service running context. On other SAPI this function is disabled.

 }}} 

## Parameters

 {{{ 

- **`$state`** — `true` for enable the service pause/resume capability. `false` for disable the service pause/resume capability.

 }}} 

## Return Values

 {{{ 

Return the current or old pause/resume capability state.

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
