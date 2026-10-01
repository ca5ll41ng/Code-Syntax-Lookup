---
id: "en-php-function-function-shm-detach"
language: "php"
lang: "en"
category: "function"
name: "shm_detach"
title: "Disconnects from shared memory segment"
signature: "true shm_detach(SysvSharedMemory $shm)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.shm-detach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disconnects from shared memory segment

## Description

```php
true shm_detach(SysvSharedMemory $shm)
```

`shm_detach()` disconnects from the shared memory given by the `$shm` created by `shm_attach()`. Remember, that shared memory still exist in the Unix system and the data is still present.

## Parameters

- **`$shm`** — A shared memory segment obtained from `shm_attach()`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The return type is `true` now; previously, it was `bool`. |
| 8.0.0 | `$shm` expects a `SysvSharedMemory` instance now; previously, a `resource` was expected. |

## See Also

 `shm_attach()` `shm_remove()` `shm_remove_var()`
