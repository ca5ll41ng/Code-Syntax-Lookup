---
id: "en-php-function-swoole-timer-after"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::after"
title: "Execute a function after a specified time"
signature: "public static int|false Swoole\\Timer::after(int $ms, callable $callback, mixed $params)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a function after a specified time

## Description

```php
public static int|false Swoole\Timer::after(int $ms, callable $callback, mixed $params)
```

Creates a one-shot timer, which is destroyed once its callback has run. Unlike `sleep()`, it does not block the current process.

## Parameters

- **`$ms`** — The delay in milliseconds. Must be greater than or equal to `1`; a lower value emits an `E_WARNING` and the call fails.
- **`$callback`** — The function to execute once the delay has elapsed. It is called as `callback(mixed ...$params)`. Unlike `Swoole\Timer::tick()`, the timer ID is not passed to the callback.
- **`$params`** — Additional values passed to `$callback`.

## Return Values

Returns the timer ID, which can be passed to `Swoole\Timer::clear()` to cancel the timer before it fires. Returns `false` if the timer could not be created, in particular when `$ms` is less than `1`.

## Examples

**`Swoole\Timer::after()` example**

```php


<?php
Swoole\Timer::after(1000, function (string $name) {
    echo "Hello, $name\n";
}, "Swoole");
?>

   
```

The above example will output:

```text


Hello, Swoole

   
```
