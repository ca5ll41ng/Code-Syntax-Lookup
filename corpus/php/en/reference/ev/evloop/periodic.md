---
id: "en-php-function-evloop-periodic"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::periodic"
title: "Creates EvPeriodic watcher object associated with the current event loop instance"
signature: "final public EvPeriodic EvLoop::periodic(float $offset, float $interval, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.periodic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvPeriodic watcher object associated with the current event loop instance

## Description

```php
final public EvPeriodic EvLoop::periodic(float $offset, float $interval, callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvPeriodic watcher object associated with the current event loop instance

## Parameters

All parameters have the same meaning as for `EvPeriodic::__construct()`

## Return Values

Returns EvPeriodic object on success.

## See Also

  `EvPeriodic::__construct()`
