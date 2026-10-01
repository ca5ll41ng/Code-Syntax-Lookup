---
id: "en-php-function-function-win32-add-right-access-service"
language: "php"
lang: "en"
category: "function"
name: "win32_add_right_access_service"
title: "Add rights access for an username to the service"
signature: "void win32_add_right_access_service(string $servicename, string $username, int $right, string $machine = null)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-add-right-access-service.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add rights access for an username to the service

## Description

```php
void win32_add_right_access_service(string $servicename, string $username, int $right, string $machine = null)
```

Add the rights access for `$username` on `$servicename` service. Administrative privileges are required for this to succeed.

## Parameters

- **`$servicename`** — The service name to add rights access.
- **`$username`** — Read the rights access for `$username`.
- **`$right`** — The rights allowed for `$username`. The service rights constants can be used to define this value.
- **`$machine`** — The optional machine name on which you want to create a service. If omitted, it will use the local machine.

## Return Values

Return a `Win32Service\RightInfo` object.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$service` parameter is empty.

A `ValueError` is thrown if the value of `$username` parameter is empty.

A `Win32ServiceException` is thrown on error.

## See Also

`win32_read_all_rights_access_service()` `win32_read_rights_access_service()` `win32_remove_right_access_service()` Win32 Rights constants
