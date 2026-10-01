---
id: "en-php-function-swoole-event-cycle"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::cycle"
title: "Define a function to execute at the end of each event loop iteration"
signature: "public static bool Swoole\\Event::cycle(callable $callback, bool $before = false)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.cycle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define a function to execute at the end of each event loop iteration

## Description

```php
public static bool Swoole\Event::cycle(callable $callback, bool $before = false)
```

Defines a callback function to execute at the end (or beginning, if `$before` is true) of each event loop iteration.

## Parameters

- **`$callback`** — The function to execute. Set to `null` to clear a previously set cycle function.
- **`$before`** — If `true`, the callback executes before the event loop; if `false`, after.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic usage**

```php

     
<?php
Swoole\Timer::tick(2000, function ($id) {
    var_dump($id);
});

Swoole\Event::cycle(function () {
    echo "hello [1]\n";
    Swoole\Event::cycle(function () {
        echo "hello [2]\n";
        Swoole\Event::cycle(null);
    });
});

Swoole\Event::wait();

    
```
