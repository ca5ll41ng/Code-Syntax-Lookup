---
id: "en-php-function-function-sem-acquire"
language: "php"
lang: "en"
category: "function"
name: "sem_acquire"
title: "Acquire a semaphore"
signature: "bool sem_acquire(SysvSemaphore $semaphore, bool $non_blocking = false)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.sem-acquire.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Acquire a semaphore

## Description

```php
bool sem_acquire(SysvSemaphore $semaphore, bool $non_blocking = false)
```

`sem_acquire()` by default blocks (if necessary) until the semaphore can be acquired. A process attempting to acquire a semaphore which it has already acquired will block forever if acquiring the semaphore would cause its maximum number of semaphore to be exceeded.

After processing a request, any semaphores acquired by the process but not explicitly released will be released automatically and a warning will be generated.

## Parameters

- **`$semaphore`** — `$semaphore` is a semaphore obtained from `sem_get()`.
- **`$non_blocking`** — Specifies if the process shouldn't wait for the semaphore to be acquired. If set to `true`, the call will return `false` immediately if a semaphore cannot be immediately acquired.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$semaphore` expects a `SysvSemaphore` instance now; previously, a `resource` was expected. |

## See Also

 `sem_get()` `sem_release()`
