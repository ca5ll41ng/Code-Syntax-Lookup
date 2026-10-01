---
id: "en-php-function-function-pcntl-getcpuaffinity"
language: "php"
lang: "en"
category: "function"
name: "pcntl_getcpuaffinity"
title: "Get the cpu affinity of a process"
signature: "array|false pcntl_getcpuaffinity(int|null $process_id = null)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-getcpuaffinity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the cpu affinity of a process

## Description

```php
array|false pcntl_getcpuaffinity(int|null $process_id = null)
```

Retrieve the cpu affinity of the `$process_id`.

## Parameters

- **`$process_id`** — If `null`, the current process ID is used.

## Return Values

Returns the cpu affinity mask of the process, or `false` on failure.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Errors/Exceptions

A `ValueError` is thrown when `$process_id` is an invalid process id or the cpu mask had failed to be created.

If `$process_id` is a process for which the current user has no allowed permission, a `E_WARNING` is emitted.

## See Also

 `pcntl_setcpuaffinity()`
