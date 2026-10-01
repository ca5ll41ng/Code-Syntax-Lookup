---
id: "en-php-function-evperiodic-construct"
language: "php"
lang: "en"
category: "function"
name: "EvPeriodic::__construct"
title: "Constructs EvPeriodic watcher object"
signature: "public EvPeriodic::__construct(float $offset, string $interval, callable $reschedule_cb, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evperiodic.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EvPeriodic watcher object

## Description

```php
public EvPeriodic::__construct(float $offset, string $interval, callable $reschedule_cb, callable $callback, mixed $data = null, int $priority = 0)
```

Constructs EvPeriodic watcher object and starts it automatically. `EvPeriodic::createStopped()` method creates stopped periodic watcher.

## Parameters

- **`$offset`** — See Periodic watcher operation modes
- **`$interval`** — See Periodic watcher operation modes
- **`$reschedule_cb`** — Reschedule callback. You can pass `null`. See Periodic watcher operation modes
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Examples

**Periodic timer. Use reschedule callback**

```php


<?php
// Tick each 10.5 seconds

function reschedule_cb ($watcher, $now) {
 return $now + (10.5 - fmod($now, 10.5));
}

$w = new EvPeriodic(0., 0., "reschedule_cb", function ($w, $revents) {
 echo time(), PHP_EOL;
});
Ev::run();
?>


   
```

**Periodic timer. Tick every 10.5 seconds starting at now**

```php


<?php
// Tick every 10.5 seconds starting at now
$w = new EvPeriodic(fmod(Ev::now(), 10.5), 10.5, NULL, function ($w, $revents) {
 echo time(), PHP_EOL;
});
Ev::run();
?>

   
```

**Hourly watcher**

```php


<?php
$hourly = EvPeriodic(0, 3600, NULL, function () {
 echo "once per hour\n";
});
?>

   
```

## See Also

  Periodic watcher operation modes   `EvTimer`   `EvPeriodic::createStopped()`
