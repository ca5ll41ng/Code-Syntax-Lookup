---
id: "en-php-function-swoole-timer-list"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Timer::list"
title: "Get an iterator over the timers of the current process"
signature: "public static Swoole\\Timer\\Iterator Swoole\\Timer::list()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-timer.list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an iterator over the timers of the current process

## Description

```php
public static Swoole\Timer\Iterator Swoole\Timer::list()
```

Returns an iterator over the IDs of the timers created from PHP in the current process. Timers created internally by Swoole are not listed. As of Swoole 4.4.0.

## Return Values

Returns a `Swoole\Timer\Iterator` object, which extends `ArrayIterator` and yields the timer IDs as `int` values. The iterator is a snapshot taken when the method is called; it is empty when no timer exists.

## Examples

**`Swoole\Timer::list()` example**

```php


<?php
Swoole\Timer::tick(1000, function () {});
Swoole\Timer::after(5000, function () {});

foreach (Swoole\Timer::list() as $timer_id) {
    echo $timer_id, "\n";
    Swoole\Timer::clear($timer_id);
}
?>

   
```

The above example will output something similar to:

```text


1
2

   
```
