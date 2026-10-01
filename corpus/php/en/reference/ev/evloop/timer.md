---
id: "en-php-function-evloop-timer"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::timer"
title: "Creates EvTimer watcher object associated with the current event loop instance"
signature: "final public EvTimer EvLoop::timer(float $after, float $repeat, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.timer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvTimer watcher object associated with the current event loop instance

## Description

```php
final public EvTimer EvLoop::timer(float $after, float $repeat, callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvTimer watcher object associated with the current event loop instance

## Parameters

All parameters have the same meaning as for `EvTimer::__construct()`

## Return Values

Returns EvTimer object on success

## See Also

  `EvTimer::__construct()`
