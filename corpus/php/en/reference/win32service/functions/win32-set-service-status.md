---
id: "en-php-function-function-win32-set-service-status"
language: "php"
lang: "en"
category: "function"
name: "win32_set_service_status"
title: "Update the service status"
signature: "void win32_set_service_status(int $status, int $checkpoint = 0)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-set-service-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update the service status

## Description

```php
void win32_set_service_status(int $status, int $checkpoint = 0)
```

Informs the SCM of the current status of a running service. This call is only valid for a running service process.

> Since version 0.2.0, this function work only in "cli" SAPI. On other SAPI this function is disabled.

## Parameters

- **`$status`** — The service status code, one of `WIN32_SERVICE_RUNNING`, `WIN32_SERVICE_STOPPED`, `WIN32_SERVICE_STOP_PENDING`, `WIN32_SERVICE_START_PENDING`, `WIN32_SERVICE_CONTINUE_PENDING`, `WIN32_SERVICE_PAUSE_PENDING`, `WIN32_SERVICE_PAUSED`.
- **`$checkpoint`** — The checkpoint value the service increments periodically to report its progress during a lengthy start, stop, pause, or continue operation. For example, the service should increment this value as it completes each step of its initialization when it is starting up. — The `$checkpoint` is only valid when the `$status` is one of `WIN32_SERVICE_STOP_PENDING`, `WIN32_SERVICE_START_PENDING`, `WIN32_SERVICE_CONTINUE_PENDING` or `WIN32_SERVICE_PAUSE_PENDING`.

## Return Values

No value is returned.

Prior to version 1.0.0, returned `WIN32_NO_ERROR` on success, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

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
| PECL win32service 1.0.0 | The return type is now `void`, previously it was `mixed`. |
| PECL win32service 0.2.0 | This function works only in the `"cli"` SAPI. |

 }}} 

## See Also

`win32_start_service_ctrl_dispatcher()` `win32_get_last_control_message()` `win32_set_service_exit_mode()` `win32_set_service_exit_code()` Win32Service Service Status Constants
