---
id: "en-php-function-evcheck-construct"
language: "php"
lang: "en"
category: "function"
name: "EvCheck::__construct"
title: "Constructs the EvCheck watcher object"
signature: "public EvCheck::__construct(callable $callback, [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evcheck.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the EvCheck watcher object

## Description

```php
public EvCheck::__construct(callable $callback, [mixed $data = ...], [int $priority = ...])
```

Constructs the `EvCheck` watcher object.

## Parameters

- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvPrepare`   `EvLoop::check()`
