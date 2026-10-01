---
id: "en-php-function-evcheck-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvCheck::createStopped"
title: "Create instance of a stopped EvCheck watcher"
signature: "final public static object EvCheck::createStopped(string $callback, [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evcheck.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create instance of a stopped EvCheck watcher

## Description

```php
final public static object EvCheck::createStopped(string $callback, [string $data = ...], [string $priority = ...])
```

Create instance of a stopped EvCheck watcher

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns EvCheck object on success.

## See Also

  `EvPrepare`
