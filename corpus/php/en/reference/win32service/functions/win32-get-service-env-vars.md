---
id: "en-php-function-function-win32-get-service-env-vars"
language: "php"
lang: "en"
category: "function"
name: "win32_get_service_env_vars"
title: "Read all custom environment variables on service"
signature: "array win32_get_service_env_vars(string $servicename)"
module: "win32service"
source_url: "https://www.php.net/manual/en/function.win32-get-service-env-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read all custom environment variables on service

## Description

```php
array win32_get_service_env_vars(string $servicename)
```

Read all custom environment variables on `$servicename` service. This function work only for the local computer. Administrative privileges are required for this to succeed.

## Parameters

- **`$servicename`** — The service name to read environment variables.

## Return Values

Return an `array` with variable name in key and variable value in value.

## Errors/Exceptions

A `ValueError` is thrown if the value of `$service` parameter is empty.

A `Win32ServiceException` is thrown on error.

## See Also

`win32_add_service_env_var()` `win32_remove_service_env_var()`
