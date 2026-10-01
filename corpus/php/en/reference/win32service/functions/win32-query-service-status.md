---
id: "en-php-function-function-win32-query-service-status"
language: "php"
lang: "en"
category: "function"
name: "win32_query_service_status"
title: "Queries the status of a service"
signature: "array win32_query_service_status(string $servicename, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-query-service-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Queries the status of a service

## Description

```php
array win32_query_service_status(string $servicename, string $machine = null)
```

Queries the current status for a service, returning an array of information.

## Parameters

- **`$servicename`** — The short name of the service.
- **`$machine`** — The optional machine name. If omitted, the local machine will be used.

## Return Values

Returns an array consisting of the following information on success

Prior version 1.0.0, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

- **`$ServiceType`** — The dwServiceType. See Win32Service Service Type Bitmasks.
- **`$CurrentState`** — The dwCurrentState. See Win32Service Service Status Constants.
- **`$ControlsAccepted`** — Which service controls are accepted by the service. See Win32Service Service Control Message Accepted Bitmasks.
- **`$Win32ExitCode`** — If the service exited, the return code from the process. This value is equal to `WIN32_ERROR_SERVICE_SPECIFIC_ERROR` if the exit mode is not graceful. See Win32Service error codes and `win32_set_service_exit_mode()`
- **`$ServiceSpecificExitCode`** — If the service exited with an error condition, the service specific code that is logged in the event log is visible here. This value is equal to the value defined by `win32_set_service_exit_code()`
- **`$CheckPoint`** — If the service is shutting down, holds the current check point number. This is used by the SCM as a kind of heart-beat to detect a wedged service process. The value of the check point is best interpreted in conjunction with the WaitHint value.
- **`$WaitHint`** — If the service is shutting down it will set WaitHint to a checkpoint value that will indicate 100% completion. This can be used to implement a progress indicator.
- **`$ProcessId`** — The Windows process identifier. If 0, the process is not running.
- **`$ServiceFlags`** — The dwServiceFlags. See Win32Service Service Flag Constants.

## Errors/Exceptions

 {{{ 

A `ValueError` is thrown if the value of `$servicename` parameter is empty.

 }}} 

## Changelog

 {{{ 

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 1.0.0 | The return type is now `array`, previously it was `mixed`. |

 }}} 

## See Also

Win32Service Predefined Constants
