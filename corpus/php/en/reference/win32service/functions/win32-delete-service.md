---
id: "en-php-function-function-win32-delete-service"
language: "php"
lang: "en"
category: "function"
name: "win32_delete_service"
title: "Deletes a service entry from the SCM database"
signature: "void win32_delete_service(string $servicename, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-delete-service.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes a service entry from the SCM database

## Description

```php
void win32_delete_service(string $servicename, string $machine = null)
```

Attempts to delete a service from the SCM database. Administrative privileges are required for this to succeed.

This function really just marks the service for deletion. If other processes (such as the Services Applet) are open, then the deletion will be deferred until those applications are closed. If a service is marked for deletion, further attempts to delete it will fail, and attempts to create a new service with that name will also fail.

## Parameters

- **`$servicename`** — The short name of the service.
- **`$machine`** — The optional machine name. If omitted, the local machine will be used.

## Return Values

No value is returned.

Prior to version 1.0.0, returned `WIN32_NO_ERROR` on success, `false` if there is a problem with the parameters or a Win32 Error Code on failure.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$servicename` parameter is empty.

A `Win32ServiceException` is thrown on error.

## Changelog

|  |  |
| --- | --- |
| PECL win32service 1.0.0 | Throws a `ValueError` on invalid data in parameters, previously `false` was returned. |
| PECL win32service 1.0.0 | Throws a `Win32ServiceException` on error, previously a Win32 Error Code was returned. |
| PECL win32service 1.0.0 | The return type is now `void`, previously it was `mixed`. |

## Examples

**A `win32_delete_service()` example**

Deletes the dummyphp service.

```php


<?php
win32_delete_service('dummyphp');
?>

    
```

## See Also

`win32_create_service()` Win32 Error Codes
