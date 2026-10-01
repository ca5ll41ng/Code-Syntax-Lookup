---
id: "en-php-function-swoole-timer-tick"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::tick"
title: "Set a repeating interval timer"
signature: "public static int|false Swoole\\Timer::tick(int $ms, callable $callback, mixed $params)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.tick.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a repeating interval timer

## Description

```php
public static int|false Swoole\Timer::tick(int $ms, callable $callback, mixed $params)
```

Sets a timer that triggers every `$ms` milliseconds. Unlike a timer created with `Swoole\Timer::after()`, it keeps triggering until it is removed with `Swoole\Timer::clear()`.

## Parameters

- **`$ms`** — The interval in milliseconds. Must be greater than or equal to `1`; a lower value emits an `E_WARNING` and the call fails.
- **`$callback`** — The function to execute on every tick. It is called as `callback(int $timer_id, mixed ...$params)`: the ID of the timer is passed as the first argument, followed by the values given in `$params`.
- **`$params`** — Additional values passed to `$callback` after the timer ID.

## Return Values

Returns the timer ID, which can be passed to `Swoole\Timer::clear()`. Returns `false` if the timer could not be created, in particular when `$ms` is less than `1`.

## Examples

**`Swoole\Timer::tick()` example**

```php


<?php
$ticks = 0;
Swoole\Timer::tick(1000, function (int $timer_id, string $label) use (&$ticks) {
    echo "tick #", ++$ticks, " ($label)\n";
    if ($ticks === 3) {
        Swoole\Timer::clear($timer_id);
    }
}, "job");
?>

   
```

The above example will output:

```text


tick #1 (job)
tick #2 (job)
tick #3 (job)

   
```
