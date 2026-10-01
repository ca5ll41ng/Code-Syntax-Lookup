---
id: "en-php-function-evstat-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvStat::createStopped"
title: "Create a stopped EvStat watcher object"
signature: "final public static void EvStat::createStopped(string $path, float $interval, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a stopped EvStat watcher object

## Description

```php
final public static void EvStat::createStopped(string $path, float $interval, callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvStat watcher object, but doesn't start it automatically(unlike `EvStat::__construct()` ).

## Parameters

- **`$path`** — The path to wait for status changes on.
- **`$interval`** — Hint on how quickly a change is expected to be detected and should normally be specified as `0.0` to let *libev* choose a suitable value.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns a stopped EvStat watcher object on success.

## See Also

  `EvStat::__construct()`   `EvWatcher::start()`
