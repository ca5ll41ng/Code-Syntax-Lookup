---
id: "en-php-function-function-shm-remove"
language: "php"
lang: "en"
category: "function"
name: "shm_remove"
title: "Removes shared memory from Unix systems"
signature: "bool shm_remove(SysvSharedMemory $shm)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes shared memory from Unix systems

## Description

```php
bool shm_remove(SysvSharedMemory $shm)
```

`shm_remove()` removes the shared memory `$shm`. All data will be destroyed.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_remove_var()`
