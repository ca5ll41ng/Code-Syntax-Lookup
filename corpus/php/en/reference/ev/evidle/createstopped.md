---
id: "en-php-function-evidle-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvIdle::createStopped"
title: "Creates instance of a stopped EvIdle watcher object"
signature: "final public static object EvIdle::createStopped(string $callback, [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evidle.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates instance of a stopped EvIdle watcher object

## Description

```php
final public static object EvIdle::createStopped(string $callback, [mixed $data = ...], [int $priority = ...])
```

The same as `EvIdle::__construct()`, but doesn't start the watcher automatically.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvIdle object on success.

## See Also

  `EvIdle::__construct()`   `EvLoop::idle()`
