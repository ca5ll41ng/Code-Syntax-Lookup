---
id: "en-php-function-function-sem-release"
language: "php"
lang: "en"
category: "function"
name: "sem_release"
title: "Release a semaphore"
signature: "bool sem_release(SysvSemaphore $semaphore)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.sem-release.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Release a semaphore

## Description

```php
bool sem_release(SysvSemaphore $semaphore)
```

`sem_release()` releases the semaphore if it is currently acquired by the calling process, otherwise a warning is generated.

After releasing the semaphore, `sem_acquire()` may be called to re-acquire it.

## Parameters

- **`$semaphore`** — A Semaphore as returned by `sem_get()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$semaphore` expects a `SysvSemaphore` instance now; previously, a `resource` was expected. |

## See Also

 `sem_get()` `sem_acquire()`
