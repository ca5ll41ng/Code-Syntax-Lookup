---
id: "en-php-function-function-pcntl-setcpuaffinity"
language: "php"
lang: "en"
category: "function"
name: "pcntl_setcpuaffinity"
title: "Set the cpu affinity of a process"
signature: "bool pcntl_setcpuaffinity(int|null $process_id = null, array $cpu_ids = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-setcpuaffinity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the cpu affinity of a process

## Description

```php
bool pcntl_setcpuaffinity(int|null $process_id = null, array $cpu_ids = [])
```

Sets the cpu affinity for the `$process_id` with the cpu affinity mask given by `$cpu_ids`.

## Parameters

- **`$process_id`** — If `null`, the current process ID is used.
- **`$cpu_ids`** — The cpu affinity mask comprised of one or more cpu id for binding the process to.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `TypeError` is thrown if one of the cpu id from the `$cpu_ids` is invalid. A `ValueError` is thrown if `$process_id` is an invalid process id or the cpu mask had failed to be created.

## See Also

 `pcntl_getcpuaffinity()`
