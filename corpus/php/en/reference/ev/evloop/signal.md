---
id: "en-php-function-evloop-signal"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::signal"
title: "Creates EvSignal watcher object associated with the current event loop instance"
signature: "final public EvSignal EvLoop::signal(int $signum, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.signal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvSignal watcher object associated with the current event loop instance

## Description

```php
final public EvSignal EvLoop::signal(int $signum, callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvSignal watcher object associated with the current event loop instance

## Parameters

All parameters have the same meaning as for `EvSignal::__construct()`

## Return Values

Returns EvSignal object on success

## See Also

  `EvSignal::__construct()`
