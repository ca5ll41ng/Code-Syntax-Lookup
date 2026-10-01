---
id: "en-php-function-swoole-coroutine-lock-trylock"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Coroutine\\Lock::trylock"
title: "Attempt to acquire the lock without blocking"
signature: "public bool Swoole\\Coroutine\\Lock::trylock()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-coroutine-lock.trylock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attempt to acquire the lock without blocking

## Description

```php
public bool Swoole\Coroutine\Lock::trylock()
```

When calling the lock operation, if the lock is already held by another coroutine, the function will immediately return false without suspending the current coroutine or yielding CPU control. This non-blocking design allows the caller to flexibly handle contention situations, such as retrying, giving up, or executing other logic.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the lock was acquired successfully, `false` if the lock is not available.
