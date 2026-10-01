---
id: "en-php-function-swoole-coroutine-lock-unlock"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Coroutine\\Lock::unlock"
title: "Release the lock"
signature: "public bool Swoole\\Coroutine\\Lock::unlock()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-coroutine-lock.unlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Release the lock

## Description

```php
public bool Swoole\Coroutine\Lock::unlock()
```

## Unlock Behavior

1. *With io_uring futex:* the system will precisely wake up one coroutine in the waiting queue.
2. *Without io_uring futex:* waiting coroutines need to wait for their backoff time to end and compete to reacquire the lock.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the lock was released successfully, `false` otherwise.
