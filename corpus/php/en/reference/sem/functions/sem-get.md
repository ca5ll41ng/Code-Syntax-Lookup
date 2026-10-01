---
id: "en-php-function-function-sem-get"
language: "php"
lang: "en"
category: "function"
name: "sem_get"
title: "Get a semaphore id"
signature: "SysvSemaphore|false sem_get(int $key, int $max_acquire = 1, int $permissions = 0666, bool $auto_release = true)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.sem-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a semaphore id

## Description

```php
SysvSemaphore|false sem_get(int $key, int $max_acquire = 1, int $permissions = 0666, bool $auto_release = true)
```

`sem_get()` returns an id that can be used to access the System V semaphore with the given `$key`.

A second call to `sem_get()` for the same key will return a different semaphore identifier, but both identifiers access the same underlying semaphore.

If `$key` is `0`, a new private semaphore is created for each call to `sem_get()`.

## Parameters

- **`$key`**
- **`$max_acquire`** — The number of processes that can acquire the semaphore simultaneously is set to `$max_acquire`.
- **`$permissions`** — The semaphore permissions. Actually this value is set only if the process finds it is the only process currently attached to the semaphore.
- **`$auto_release`** — Specifies if the semaphore should be automatically released on request shutdown.

## Return Values

Returns a positive semaphore identifier on success, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `SysvSemaphore` instance now; previously, a `resource` was returned. |
| 8.0.0 | The type of `$auto_release` has been changed from `int` to `bool`. |

## Notes

> When using `sem_get()` to access a semaphore created outside PHP, note that the semaphore must have been created as a set of 3 semaphores (for example, by specifying 3 as the `nsems` parameter when calling the C `semget()` function), otherwise PHP will be unable to access the semaphore.

## See Also

 `sem_acquire()` `sem_release()` `ftok()`
