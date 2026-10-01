---
id: "en-php-function-function-sem-remove"
language: "php"
lang: "en"
category: "function"
name: "sem_remove"
title: "Remove a semaphore"
signature: "bool sem_remove(SysvSemaphore $semaphore)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.sem-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a semaphore

## Description

```php
bool sem_remove(SysvSemaphore $semaphore)
```

`sem_remove()` removes the given semaphore.

After removing the semaphore, it is no longer accessible.

## Parameters

- **`$semaphore`** — A semaphore as returned by `sem_get()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$semaphore` expects a `SysvSemaphore` instance now; previously, a `resource` was expected. |

## See Also

 `sem_get()` `sem_release()` `sem_acquire()`
