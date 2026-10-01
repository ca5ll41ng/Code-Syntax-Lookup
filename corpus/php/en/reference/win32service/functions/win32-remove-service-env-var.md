---
id: "en-php-function-function-win32-remove-service-env-var"
language: "php"
lang: "en"
category: "function"
name: "win32_remove_service_env_var"
title: "Remove a custom environment variables on service"
signature: "void win32_remove_service_env_var(string $servicename, string $varname)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-remove-service-env-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a custom environment variables on service

## Description

```php
void win32_remove_service_env_var(string $servicename, string $varname)
```

Remove a custom environment variables `$varname` on `$servicename` service. This function work only for the local computer. Administrative privileges are required for this to succeed.

## Parameters

- **`$servicename`** — The service name to remove environment variable.
- **`$varname`** — The environment variable name.

## Return Values

No value is returned.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$service` parameter is empty.

A `ValueError` is thrown if the value of `$varname` parameter is empty.

A `Win32ServiceException` is thrown on error.

## See Also

`win32_get_service_env_vars()` `win32_add_service_env_var()`
