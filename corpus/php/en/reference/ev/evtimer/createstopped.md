---
id: "en-php-function-evtimer-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvTimer::createStopped"
title: "Creates EvTimer stopped watcher object"
signature: "final public static EvTimer EvTimer::createStopped(float $after, float $repeat, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evtimer.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvTimer stopped watcher object

## Description

```php
final public static EvTimer EvTimer::createStopped(float $after, float $repeat, callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvTimer stopped watcher object. Unlike `EvTimer::__construct()`, this method doesn't start the watcher automatically.

## Parameters

- **`$after`** — Configures the timer to trigger after `$after` seconds.
- **`$repeat`** — If repeat is `0.0`, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvTimer watcher object on success.

## Examples

**Monitor changes of /var/log/messages. Avoid missing updates by means of one second delay**

```php


<?php
$timer = EvTimer::createStopped(0., 1.02, function ($w) {
    $w->stop();

    $stat = $w->data;

    // 1 second after the most recent change of the file
    printf("Current size: %ld\n", $stat->attr()['size']);
});

$stat = new EvStat("/var/log/messages", 0., function () use ($timer) {
    // Reset timer watcher
    $timer->again();
});

$timer->data = $stat;

Ev::run();
?>

   
```

## See Also

  `EvTimer::__construct()`   `EvPeriodic`
