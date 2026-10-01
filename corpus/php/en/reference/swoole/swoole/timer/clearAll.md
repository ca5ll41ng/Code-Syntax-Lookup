---
id: "en-php-function-swoole-timer-clearall"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::clearAll"
title: "Clear all timers in the current process."
signature: "public static bool Swoole\\Timer::clearAll()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.clearall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear all timers in the current process.

## Description

```php
public static bool Swoole\Timer::clearAll()
```

Clear all timers in the current process. As of Swoole 4.4.0.

## Return Values

Returns `true` on success or `false` on failure. `false` is returned when no timer has been created in this process yet. Only timers created from PHP are removed; internal timers are left in place.
