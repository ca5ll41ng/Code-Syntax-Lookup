---
id: "en-php-function-function-shm-attach"
language: "php"
lang: "en"
category: "function"
name: "shm_attach"
title: "Creates or open a shared memory segment"
signature: "SysvSharedMemory|false shm_attach(int $key, int|null $size = null, int $permissions = 0666)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-attach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates or open a shared memory segment

## Description

```php
SysvSharedMemory|false shm_attach(int $key, int|null $size = null, int $permissions = 0666)
```

`shm_attach()` returns an id that can be used to access the System V shared memory with the given `$key`, the first call creates the shared memory segment with `$size` and the optional perm-bits `$permissions`.

A second call to `shm_attach()` for the same `$key` will return a different `SysvSharedMemory` instance, but both instances access the same underlying shared memory. `$size` and `$permissions` will be ignored.

## Parameters

- **`$key`** — A numeric shared memory segment ID
- **`$size`** — The memory size. If not provided, default to the `sysvshm.init_mem` in the php.ini, otherwise 10000 bytes.
- **`$permissions`** — The optional permission bits. Default to 0666.

## Return Values

Returns a `SysvSharedMemory` instance on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns an `SysvSharedMemory` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$size` is nullable now. |

## See Also

 `shm_detach()` `ftok()`
