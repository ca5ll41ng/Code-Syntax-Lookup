---
id: "en-php-function-swoole-timer-exists"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::exists"
title: "Check if a timer is existed."
signature: "public static bool Swoole\\Timer::exists(int $timer_id)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a timer is existed.

## Description

```php
public static bool Swoole\Timer::exists(int $timer_id)
```

Checks whether a timer with the given ID exists in the current process.

## Parameters

- **`$timer_id`** — The timer ID returned by `Swoole\Timer::tick()` or `Swoole\Timer::after()`.

## Return Values

Returns `true` if a timer with this ID exists in the current process, `false` otherwise.
