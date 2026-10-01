---
id: "en-php-guide-ev-watcher-callbacks"
language: "php"
lang: "en"
category: "guide"
name: "ev.watcher-callbacks"
title: "Watcher callbacks"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.watcher-callbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Watcher callbacks

All watchers can be active(waiting for events) or inactive(paused). Only active watchers will have their callbacks invoked. All callbacks will be called with at least two arguments: `$watcher` - the watcher, and `$revents` a bitmask of received events.

Watcher callbacks are passed to the watcher constructors (the classes derived from `EvWatcher` - `EvCheck::__construct()`, `EvChild::__construct()` etc.). A watcher callback should match the following prototype:

```php
void callback(object $watcher = NULL, int $revents = NULL)
```

- **`$watcher`** — The watcher instance(of a class extending `EvWatcher` ).
- **`$revents`** — Watcher received events.

Each watcher type has its associated bit in `$revents`, so one can use the same callback for multiple watchers. The event mask is named after the type, i.e. `EvChild` (or `EvLoop::child()`) sets `Ev::CHILD`, `EvPrepare` (or `EvLoop::prepare()`) sets `Ev::PREPARE`, `EvPeriodic` (or `EvLoop::periodic()`) sets `Ev::PERIODIC` and so on, with the exception of I/O events (which can set both `Ev::READ` and `Ev::WRITE` bits).
