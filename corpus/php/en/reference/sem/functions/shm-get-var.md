---
id: "en-php-function-function-shm-get-var"
language: "php"
lang: "en"
category: "function"
name: "shm_get_var"
title: "Returns a variable from shared memory"
signature: "mixed shm_get_var(SysvSharedMemory $shm, int $key)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-get-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a variable from shared memory

## Description

```php
mixed shm_get_var(SysvSharedMemory $shm, int $key)
```

`shm_get_var()` returns the variable with a given `$key`, in the given shared memory segment. The variable is still present in the shared memory.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.
- **`$key`** — The variable key.

## Return Values

Returns the variable with the given key.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_has_var()` `shm_put_var()`
