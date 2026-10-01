---
id: "en-php-function-swoole-timer-stats"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::stats"
title: "Get timer statistics."
signature: "public static array Swoole\\Timer::stats()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.stats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get timer statistics.

## Description

```php
public static array Swoole\Timer::stats()
```

Get timer statistics. As of Swoole 4.4.0.

## Return Values

Returns an array with the following keys:

- **`initialized`** — Whether the timer subsystem has been started. It is `false` until the first timer is created.
- **`num`** — The number of timers currently registered in the process.
- **`round`** — The current round of the timer loop.

## Examples

**`Swoole\Timer::stats()` example**

```php


<?php
$timer_id = Swoole\Timer::tick(1000, function () {});
var_dump(Swoole\Timer::stats());
Swoole\Timer::clear($timer_id);
?>

   
```

The above example will output something similar to:

```text


array(3) {
  ["initialized"]=>
  bool(true)
  ["num"]=>
  int(1)
  ["round"]=>
  int(0)
}

   
```
