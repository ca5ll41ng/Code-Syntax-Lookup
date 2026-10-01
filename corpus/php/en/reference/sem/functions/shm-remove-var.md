---
id: "en-php-function-function-shm-remove-var"
language: "php"
lang: "en"
category: "function"
name: "shm_remove_var"
title: "Removes a variable from shared memory"
signature: "bool shm_remove_var(SysvSharedMemory $shm, int $key)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-remove-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a variable from shared memory

## Description

```php
bool shm_remove_var(SysvSharedMemory $shm, int $key)
```

Removes a variable with a given `$key` and frees the occupied memory.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.
- **`$key`** — The variable key.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_remove()`
