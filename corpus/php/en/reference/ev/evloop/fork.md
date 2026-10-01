---
id: "en-php-function-evloop-fork"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::fork"
title: "Creates EvFork watcher object associated with the current event loop instance"
signature: "final public EvFork EvLoop::fork(callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.fork.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvFork watcher object associated with the current event loop instance

## Description

```php
final public EvFork EvLoop::fork(callable $callback, mixed $data = null, int $priority = 0)
```

Creates EvFork watcher object associated with the current event loop instance

## Parameters

All parameters have the same meaning as for `EvFork::__construct()`

## Return Values

Returns EvFork object on success.

## See Also

  `EvFork::__construct()`
