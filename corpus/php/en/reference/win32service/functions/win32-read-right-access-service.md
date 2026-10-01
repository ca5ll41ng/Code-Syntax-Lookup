---
id: "en-php-function-function-win32-read-right-access-service"
language: "php"
lang: "en"
category: "function"
name: "win32_read_right_access_service"
title: "Read the service rights access for an username"
signature: "Win32Service\\RightInfo win32_read_right_access_service(string $servicename, string $username, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-read-right-access-service.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read the service rights access for an username

## Description

```php
Win32Service\RightInfo win32_read_right_access_service(string $servicename, string $username, string $machine = null)
```

Read the rights access for `$username` on `$servicename` service. Administrative privileges are required for this to succeed.

## Parameters

- **`$servicename`** — The service name to read rights access.
- **`$username`** — Read the rights access for `$username`
- **`$machine`** — The optional machine name on which you want to create a service. If omitted, it will use the local machine.

## Return Values

Return a `Win32Service\RightInfo` object.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$service` parameter is empty.

A `ValueError` is thrown if the value of `$username` parameter is empty.

A `Win32ServiceException` is thrown on error.

## See Also

`win32_read_all_rights_access_service()` `win32_add_right_access_service()` `win32_remove_right_access_service()` Win32 Rights constants
