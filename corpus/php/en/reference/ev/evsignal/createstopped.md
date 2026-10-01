---
id: "en-php-function-evsignal-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvSignal::createStopped"
title: "Create stopped EvSignal watcher object"
signature: "final public static EvSignal EvSignal::createStopped(int $signum, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evsignal.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create stopped EvSignal watcher object

## Description

```php
final public static EvSignal EvSignal::createStopped(int $signum, callable $callback, mixed $data = null, int $priority = 0)
```

Create stopped EvSignal watcher object. Unlike `EvSignal::__construct()`, this method doesn't start the watcher automatically.

## Parameters

- **`$signum`** — Signal number. See constants exported by *pcntl* extension. See also `signal(7)` man page.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvSignal object on success.

## See Also

  `EvWatcher::start()`   `EvSignal::__construct()`
