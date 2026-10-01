---
id: "en-php-function-swoole-timer-set"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::set"
title: "Set timer-related parameters"
signature: "public static void Swoole\\Timer::set(array $settings)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set timer-related parameters

## Description

```php
public static void Swoole\Timer::set(array $settings)
```

Sets the options used by the timers of the current process.

> This method was deprecated in Swoole 4.6.0 and removed in Swoole 6.0.0. Use `swoole_async_set()` instead.

## Parameters

- **`$settings`** — An associative array of options. Only `enable_coroutine` is recognised: when set to `false`, the timer callbacks are executed directly instead of inside a newly created coroutine.

## Return Values

No value is returned.
