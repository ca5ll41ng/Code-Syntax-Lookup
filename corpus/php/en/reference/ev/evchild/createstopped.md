---
id: "en-php-function-evchild-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvChild::createStopped"
title: "Create instance of a stopped EvChild watcher"
signature: "final public static object EvChild::createStopped(int $pid, bool $trace, callable $callback, [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evchild.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create instance of a stopped EvChild watcher

## Description

```php
final public static object EvChild::createStopped(int $pid, bool $trace, callable $callback, [mixed $data = ...], [int $priority = ...])
```

The same as `EvChild::__construct()`, but doesn't start the watcher automatically.

## Parameters

- **`$pid`** — The same as for `EvChild::__construct()`
- **`$trace`** — The same as for `EvChild::__construct()`
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

## See Also

  `EvChild::__construct()`   `EvLoop::child()`
