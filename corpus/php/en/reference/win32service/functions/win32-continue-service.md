---
id: "en-php-function-function-win32-continue-service"
language: "php"
lang: "en"
category: "function"
name: "win32_continue_service"
title: "Resumes a paused service"
signature: "void win32_continue_service(string $servicename, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-continue-service.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resumes a paused service

## Description

```php
void win32_continue_service(string $servicename, string $machine = null)
```

Resumes a paused, named service. Requires administrative privileges or an account with appropriate rights set in the service's ACL.

## Parameters

- **`$servicename`** — The short name of the service.
- **`$machine`** — Optional machine name. If omitted, the local machine is used.

## Return Values

No value is returned.

Prior to version 1.0.0, returned `WIN32_NO_ERROR` on success, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

## Errors/Exceptions

 {{{ 

A `ValueError` is thrown if the value of `$servicename` parameter is empty.

A `Win32ServiceException` is thrown on error.

 }}} 

## Changelog

 {{{ 

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 1.0.0 | The return type is now `void`, previously it was `mixed`. |
| PECL win32service 0.3.0 | This function does not longer require an administrator account if ACL is set for another account. |

 }}} 

## See Also

`win32_start_service()` `win32_stop_service()` `win32_pause_service()` `win32_send_custom_control()` Win32 Error Codes
