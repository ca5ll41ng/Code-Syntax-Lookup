---
id: "en-php-function-swoole-timer-info"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::info"
title: "Get information about a timer."
signature: "public static array|null Swoole\\Timer::info(int $timer_id)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information about a timer.

## Description

```php
public static array|null Swoole\Timer::info(int $timer_id)
```

Get information about a timer. As of Swoole 4.4.0.

## Parameters

- **`$timer_id`** — The timer ID returned by `Swoole\Timer::tick()` or `Swoole\Timer::after()`.

## Return Values

Returns an array describing the timer, or `null` if no timer with this ID exists in the current process. The array contains the following keys:

- **`exec_msec`** — The time of the next execution, in milliseconds, counted from the moment the timer subsystem was started. It is not a duration.
- **`exec_count`** — The number of times the callback has been executed. Available as of Swoole 4.8.0.
- **`interval`** — The interval of the timer, in milliseconds.
- **`round`** — The number of the timer loop round in which the timer was created.
- **`removed`** — Whether the timer has been removed.

## Examples

**`Swoole\Timer::info()` example**

```php


<?php
$timer_id = Swoole\Timer::tick(1000, function () {});
var_dump(Swoole\Timer::info($timer_id));
Swoole\Timer::clear($timer_id);
?>

   
```

The above example will output something similar to:

```text


array(5) {
  ["exec_msec"]=>
  int(1000)
  ["exec_count"]=>
  int(0)
  ["interval"]=>
  int(1000)
  ["round"]=>
  int(0)
  ["removed"]=>
  bool(false)
}

   
```
