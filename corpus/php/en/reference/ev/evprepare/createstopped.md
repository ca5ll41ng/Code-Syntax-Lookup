---
id: "en-php-function-evprepare-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvPrepare::createStopped"
title: "Creates a stopped instance of EvPrepare watcher"
signature: "final public static EvPrepare EvPrepare::createStopped(callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evprepare.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a stopped instance of EvPrepare watcher

## Description

```php
final public static EvPrepare EvPrepare::createStopped(callable $callback, mixed $data = null, int $priority = 0)
```

Creates a stopped instance of EvPrepare watcher. Unlike `EvPrepare::__construct()`, this method doesn't start the watcher automatically.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvPrepare object on success.

## See Also

  `EvPrepare::__construct()`   `EvWatcher::start()`
