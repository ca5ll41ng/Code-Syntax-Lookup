---
id: "en-php-function-evfork-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvFork::createStopped"
title: "Creates a stopped instance of EvFork watcher class"
signature: "final public static object EvFork::createStopped(string $callback, [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evfork.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a stopped instance of EvFork watcher class

## Description

```php
final public static object EvFork::createStopped(string $callback, [string $data = ...], [string $priority = ...])
```

The same as `EvFork::__construct()`, but doesn't start the watcher automatically.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvFork(stopped) object on success.

## See Also

  `EvFork::__construct()`
