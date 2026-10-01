---
id: "en-php-function-evprepare-construct"
language: "php"
lang: "en"
category: "function"
name: "EvPrepare::__construct"
title: "Constructs EvPrepare watcher object"
signature: "public EvPrepare::__construct(string $callback, [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evprepare.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EvPrepare watcher object

## Description

```php
public EvPrepare::__construct(string $callback, [string $data = ...], [string $priority = ...])
```

Constructs EvPrepare watcher object. And starts the watcher automatically. If a stopped watcher is needed, consider using `EvPrepare::createStopped()`

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvCheck`
