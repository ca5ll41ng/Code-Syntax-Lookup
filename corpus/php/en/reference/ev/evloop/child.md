---
id: "en-php-function-evloop-child"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::child"
title: "Creates EvChild object associated with the current event loop"
signature: "final public EvChild EvLoop::child(string $pid, string $trace, string $callback, [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.child.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvChild object associated with the current event loop

## Description

```php
final public EvChild EvLoop::child(string $pid, string $trace, string $callback, [string $data = ...], [string $priority = ...])
```

Creates EvChild object associated with the current event loop.

## Parameters

All parameters have the same meaning as for `EvChild::__construct()`

## Return Values

Returns EvChild object on success.

## See Also

  `EvChild::__construct()`
