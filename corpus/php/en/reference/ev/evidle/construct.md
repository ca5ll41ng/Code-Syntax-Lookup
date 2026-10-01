---
id: "en-php-function-evidle-construct"
language: "php"
lang: "en"
category: "function"
name: "EvIdle::__construct"
title: "Constructs the EvIdle watcher object"
signature: "public EvIdle::__construct(callable $callback, [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evidle.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the EvIdle watcher object

## Description

```php
public EvIdle::__construct(callable $callback, [mixed $data = ...], [int $priority = ...])
```

Constructs the EvIdle watcher object and starts the watcher automatically.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvIdle::createStopped()`   `EvLoop::idle()`
