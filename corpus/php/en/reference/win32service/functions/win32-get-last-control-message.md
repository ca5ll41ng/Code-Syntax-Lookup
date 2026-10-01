---
id: "en-php-function-function-win32-get-last-control-message"
language: "php"
lang: "en"
category: "function"
name: "win32_get_last_control_message"
title: "Returns the last control message that was sent to this service"
signature: "int win32_get_last_control_message()"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-get-last-control-message.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last control message that was sent to this service

## Description

```php
int win32_get_last_control_message()
```

Returns the control code that was last sent to this service process. When running as a service you should periodically check this to determine if your service needs to stop running.

> Since version 0.2.0, this function work only in "cli" SAPI. On other SAPI this function is disabled.

## Parameters

This function has no parameters.

## Return Values

Returns a control constant which will be one of the Win32Service Service Control Message Constants: `WIN32_SERVICE_CONTROL_CONTINUE`, `WIN32_SERVICE_CONTROL_DEVICEEVENT`, `WIN32_SERVICE_CONTROL_HARDWAREPROFILECHANGE`, `WIN32_SERVICE_CONTROL_INTERROGATE`, `WIN32_SERVICE_CONTROL_NETBINDADD`, `WIN32_SERVICE_CONTROL_NETBINDDISABLE`, `WIN32_SERVICE_CONTROL_NETBINDENABLE`, `WIN32_SERVICE_CONTROL_NETBINDREMOVE`, `WIN32_SERVICE_CONTROL_PARAMCHANGE`, `WIN32_SERVICE_CONTROL_PAUSE`, `WIN32_SERVICE_CONTROL_POWEREVENT`, `WIN32_SERVICE_CONTROL_PRESHUTDOWN`, `WIN32_SERVICE_CONTROL_SESSIONCHANGE`, `WIN32_SERVICE_CONTROL_SHUTDOWN`, `WIN32_SERVICE_CONTROL_STOP`.

If the value is between 128 and 255, the control code is custom.

## Errors/Exceptions

Prior to version 1.0.0, if the SAPI is not `"cli"`, this function emits an `E_ERROR` level error.

As of version 1.0.0, will throw a `Win32ServiceException` if SAPI is not `"cli"`

## Changelog

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 0.2.0 | This function works only in the `"cli"` SAPI. |

## See Also

`win32_start_service_ctrl_dispatcher()` `win32_set_service_status()` `win32_set_service_exit_mode()` `win32_set_service_exit_code()` Win32Service Service Control Message Constants
