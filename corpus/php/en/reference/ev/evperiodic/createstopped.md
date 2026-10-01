---
id: "en-php-function-evperiodic-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvPeriodic::createStopped"
title: "Create a stopped EvPeriodic watcher"
signature: "final public static EvPeriodic EvPeriodic::createStopped(float $offset, float $interval, callable $reschedule_cb, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evperiodic.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a stopped EvPeriodic watcher

## Description

```php
final public static EvPeriodic EvPeriodic::createStopped(float $offset, float $interval, callable $reschedule_cb, callable $callback, mixed $data = null, int $priority = 0)
```

Create EvPeriodic object. Unlike `EvPeriodic::__construct()` this method doesn't start the watcher automatically.

## Parameters

- **`$offset`** — See Periodic watcher operation modes
- **`$interval`** — See Periodic watcher operation modes
- **`$reschedule_cb`** — Reschedule callback. You can pass `null`. See Periodic watcher operation modes
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvPeriodic watcher object on success.

## See Also

  `EvPeriodic::__construct()`   `EvTimer::createStopped()`
