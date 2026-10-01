---
id: "en-php-function-function-shm-put-var"
language: "php"
lang: "en"
category: "function"
name: "shm_put_var"
title: "Inserts or updates a variable in shared memory"
signature: "bool shm_put_var(SysvSharedMemory $shm, int $key, mixed $value)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-put-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts or updates a variable in shared memory

## Description

```php
bool shm_put_var(SysvSharedMemory $shm, int $key, mixed $value)
```

`shm_put_var()` inserts or updates the `$value` with the given `$key`.

Warnings (`E_WARNING` level) will be issued if `$shm` is not a valid SysV shared memory index or if there was not enough shared memory remaining to complete your request.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.
- **`$key`** — The variable key.
- **`$value`** — The variable. All variable types that `serialize()` supports may be used: generally this means all types except for resources and some internal objects that cannot be serialized.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_get_var()` `shm_has_var()`
