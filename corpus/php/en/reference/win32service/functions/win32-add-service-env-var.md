---
id: "en-php-function-function-win32-add-service-env-var"
language: "php"
lang: "en"
category: "function"
name: "win32_add_service_env_var"
title: "Add a custom environment variables on service"
signature: "void win32_add_service_env_var(string $servicename, string $varname, string $value)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-add-service-env-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a custom environment variables on service

## Description

```php
void win32_add_service_env_var(string $servicename, string $varname, string $value)
```

Add a custom environment variables `$varname` on `$servicename` service. This function work only for the local computer. Administrative privileges are required for this to succeed.

## Parameters

- **`$servicename`** — The service name to add environment variable.
- **`$varname`** — The environment variable name.
- **`$value`** — The environment variable value.

## Return Values

No value is returned.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$service` parameter is empty.

A `ValueError` is thrown if the value of `$varname` parameter is empty.

A `Win32ServiceException` is thrown on error.

## See Also

`win32_get_service_env_vars()` `win32_remove_service_env_var()`
