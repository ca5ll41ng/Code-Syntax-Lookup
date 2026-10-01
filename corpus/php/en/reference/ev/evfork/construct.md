---
id: "en-php-function-evfork-construct"
language: "php"
lang: "en"
category: "function"
name: "EvFork::__construct"
title: "Constructs the EvFork watcher object"
signature: "public EvFork::__construct(callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evfork.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the EvFork watcher object

## Description

```php
public EvFork::__construct(callable $callback, mixed $data = null, int $priority = 0)
```

Constructs the EvFork watcher object and starts the watcher automatically.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvLoop::fork()`   `EvCheck`
