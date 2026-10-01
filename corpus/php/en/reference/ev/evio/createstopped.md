---
id: "en-php-function-evio-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvIo::createStopped"
title: "Create stopped EvIo watcher object"
signature: "final public static EvIo EvIo::createStopped(mixed $fd, int $events, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evio.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create stopped EvIo watcher object

## Description

```php
final public static EvIo EvIo::createStopped(mixed $fd, int $events, callable $callback, mixed $data = null, int $priority = 0)
```

The same as `EvIo::__construct()`, but doesn't start the watcher automatically.

## Parameters

- **`$fd`** — The same as for `EvIo::__construct()`
- **`$events`** — The same as for `EvIo::__construct()`
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvIo object on success.

## See Also

  `EvIo::__construct()`   `EvLoop::io()`
