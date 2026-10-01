---
id: "en-php-function-swoole-timer-clear"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::clear"
title: "Delete a timer by ID"
signature: "public static bool Swoole\\Timer::clear(int $timer_id)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a timer by ID

## Description

```php
public static bool Swoole\Timer::clear(int $timer_id)
```

Deletes the timer with the given ID. Only timers created by the current process can be removed; timers belonging to other processes are not visible here.

## Parameters

- **`$timer_id`** — The timer ID returned by `Swoole\Timer::tick()` or `Swoole\Timer::after()`.

## Return Values

Returns `true` on success or `false` on failure. `false` is returned when no timer with this ID exists in the current process, or when the ID refers to an internal timer.

## Examples

**`Swoole\Timer::clear()` example**

```php


<?php
$timer_id = Swoole\Timer::after(1000, function () {
    echo "never printed\n";
});
var_dump(Swoole\Timer::clear($timer_id));
?>

   
```

The above example will output:

```text


bool(true)

   
```
