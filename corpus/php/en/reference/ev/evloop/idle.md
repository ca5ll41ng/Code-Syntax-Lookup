---
id: "en-php-function-evloop-idle"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::idle"
title: "Creates EvIdle watcher object associated with the current event loop instance"
signature: "final public EvIdle EvLoop::idle(callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.idle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvIdle watcher object associated with the current event loop instance

## Description

```php
final public EvIdle EvLoop::idle(callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvIdle watcher object associated with the current event loop instance

## Parameters

All the parameters have the same meaning as for `EvIdle::__construct()`

## Return Values

Returns EvIdle object on success.

## See Also

  `EvIdle::__construct()`
