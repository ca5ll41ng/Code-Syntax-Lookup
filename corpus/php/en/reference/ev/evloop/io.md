---
id: "en-php-function-evloop-io"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::io"
title: "Create EvIo watcher object associated with the current event loop instance"
signature: "final public EvIo EvLoop::io(mixed $fd, int $events, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.io.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create EvIo watcher object associated with the current event loop instance

## Description

```php
final public EvIo EvLoop::io(mixed $fd, int $events, callable $callback, mixed $data = null, int $priority = 0)
```

Create EvIo watcher object associated with the current event loop instance.

## Parameters

All parameters have the same meaning as for `EvIo::__construct()`

## Return Values

Returns EvIo object on success.

## See Also

  `EvIo::__construct()`
