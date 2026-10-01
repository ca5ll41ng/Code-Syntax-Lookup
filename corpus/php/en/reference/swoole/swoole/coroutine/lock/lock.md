---
id: "en-php-function-swoole-coroutine-lock-lock"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Coroutine\\Lock::lock"
title: "Acquire the lock, blocking if necessary"
signature: "public bool Swoole\\Coroutine\\Lock::lock()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-coroutine-lock.lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Acquire the lock, blocking if necessary

## Description

```php
public bool Swoole\Coroutine\Lock::lock()
```

When executing the lock operation, if the lock is already held by another coroutine, the current coroutine will actively yield CPU control and enter a suspended state. When the coroutine holding the lock calls unlock(), the waiting coroutine will be awakened and try to acquire the lock again.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the lock was acquired successfully, `false` otherwise.
