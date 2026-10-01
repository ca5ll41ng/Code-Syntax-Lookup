---
id: "en-php-function-function-shm-has-var"
language: "php"
lang: "en"
category: "function"
name: "shm_has_var"
title: "Check whether a specific entry exists"
signature: "bool shm_has_var(SysvSharedMemory $shm, int $key)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-has-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether a specific entry exists

## Description

```php
bool shm_has_var(SysvSharedMemory $shm, int $key)
```

Checks whether a specific key exists inside a shared memory segment.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.
- **`$key`** — The variable key.

## Return Values

Returns `true` if the entry exists, otherwise `false`

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_get_var()` `shm_put_var()`
