---
id: "en-php-function-evio-construct"
language: "php"
lang: "en"
category: "function"
name: "EvIo::__construct"
title: "Constructs EvIo watcher object"
signature: "public EvIo::__construct(mixed $fd, int $events, callable $callback, [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evio.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EvIo watcher object

## Description

```php
public EvIo::__construct(mixed $fd, int $events, callable $callback, [mixed $data = ...], [int $priority = ...])
```

Constructs EvIo watcher object and starts the watcher automatically.

## Parameters

- **`$fd`** — Can be a stream opened with `fopen()` or similar functions, numeric file descriptor, or socket.
- **`$events`** — `Ev::READ` and/or `Ev::WRITE`. See the bit masks.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvIo::createStopped()`   `EvLoop::io()`
