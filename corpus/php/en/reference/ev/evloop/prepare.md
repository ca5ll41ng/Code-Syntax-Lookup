---
id: "en-php-function-evloop-prepare"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::prepare"
title: "Creates EvPrepare watcher object associated with the current event loop instance"
signature: "final public EvPrepare EvLoop::prepare(callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvPrepare watcher object associated with the current event loop instance

## Description

```php
final public EvPrepare EvLoop::prepare(callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvPrepare watcher object associated with the current event loop instance

## Parameters

All parameters have the same meaning as for `EvPrepare()`

## Return Values

Returns EvPrepare object on success

## See Also

  `EvPrepare::__construct()`
