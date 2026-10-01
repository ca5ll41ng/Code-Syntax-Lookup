---
id: "en-php-function-function-win32-start-service-ctrl-dispatcher"
language: "php"
lang: "en"
category: "function"
name: "win32_start_service_ctrl_dispatcher"
title: "Registers the script with the SCM, so that it can act as the service with the given name"
signature: "void win32_start_service_ctrl_dispatcher(string $name, bool $gracefulMode = true)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-start-service-ctrl-dispatcher.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers the script with the SCM, so that it can act as the service with the given name

## Description

```php
void win32_start_service_ctrl_dispatcher(string $name, bool $gracefulMode = true)
```

When launched via the Service Control Manager, a service process is required to "check-in" with it to establish service monitoring and communication facilities. This function performs the check-in by spawning a thread to handle the lower-level communication with the service control manager.

Once started, the service process should do 2 things. The first is to tell the Service Control Manager that the service is running. This is achieved by calling `win32_set_service_status()` with the `WIN32_SERVICE_RUNNING` constant. If you need to perform some lengthy process before the service is actually running, then you can use the `WIN32_SERVICE_START_PENDING` constant. The second is to continue to check-in with the service control manager so that it can determine if it should terminate. This is achieved by periodically calling `win32_get_last_control_message()` and handling the return code appropriately.

> Since version 0.2.0, this function work only in "cli" SAPI. On other SAPI this function is disabled.

## Parameters

- **`$name`** — The short-name of the service, as registered by `win32_create_service()`.
- **`$gracefulMode`** — `true` for exit graceful. `false` for exit with error. See `win32_set_service_exit_mode()` for more details.

## Return Values

No value is returned.

Prior to version 1.0.0, returned `WIN32_NO_ERROR` on success, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

## Errors/Exceptions

Prior to version 1.0.0, if the SAPI is not `"cli"`, this function emits an `E_ERROR` level error.

As of version 1.0.0, will throw a `Win32ServiceException` if SAPI is not `"cli"`

## Changelog

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 1.0.0 | The return type is now `void`, previously it was `mixed`. |
| PECL win32service 0.4.0 | The parameter `$gracefulMode` has been added. |
| PECL win32service 0.2.0 | This function works only in the `"cli"` SAPI. |

## Examples

**A `win32_start_service_ctrl_dispatcher()` example**

Check if the service is runnig under the SCM.

```php


<?php
if (!win32_start_service_ctrl_dispatcher('dummyphp')) {
  die("I'm probably not running under the service control manager");
}

win32_set_service_status(WIN32_SERVICE_START_PENDING);

// Some lengthy process to get this service up and running.

win32_set_service_status(WIN32_SERVICE_RUNNING);

while (WIN32_SERVICE_CONTROL_STOP != win32_get_last_control_message()) {
  # do some work here, trying not to take more than around 30 seconds
  # before coming back into the loop again
}
?>

    
```

## See Also

`win32_set_service_status()` `win32_get_last_control_message()` `win32_set_service_exit_mode()` `win32_set_service_exit_code()` Win32 Error Codes
