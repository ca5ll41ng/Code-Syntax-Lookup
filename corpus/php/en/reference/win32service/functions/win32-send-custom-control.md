---
id: "en-php-function-function-win32-send-custom-control"
language: "php"
lang: "en"
category: "function"
name: "win32_send_custom_control"
title: "Send a custom control to the service"
signature: "void win32_send_custom_control(string $servicename, int $control, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-send-custom-control.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a custom control to the service

## Description

 {{{ 

```php
void win32_send_custom_control(string $servicename, int $control, string $machine = null)
```

See [Microsoft ControlService function]() for more details

 }}} 

## Parameters

 {{{ 

- **`$servicename`** — The short name of the service.
- **`$control`** — The custom contole value between 128 and 255.
- **`$machine`** — Optional machine name. If omitted, the local machine is used.

 }}} 

## Return Values

 {{{ 

No value is returned.

Prior to version 1.0.0, returned `WIN32_NO_ERROR` on success, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

 }}} 

## Errors/Exceptions

 {{{ 

Prior to version 1.0.0, if the control value is not between 128 and 255, this function emits an `E_ERROR` level error.

A `ValueError` is thrown if the value of `$servicename` parameter is empty.

A `ValueError` is thrown if the value of `$control` parameter is not between 128 and 255.

A `Win32ServiceException` is thrown on error.

 }}} 

## Changelog

 {{{ 

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 1.0.0 | The return type is now `void`, previously it was `mixed`. |

 }}} 

## See Also

 {{{ 

 `win32_start_service()` `win32_stop_service()` `win32_pause_service()` `win32_continue_service()` Win32 Error Codes 

 }}}
