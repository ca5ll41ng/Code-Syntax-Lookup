---
id: "en-php-function-evloop-check"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::check"
title: "Creates EvCheck object associated with the current event loop instance"
signature: "final public EvCheck EvLoop::check(string $callback, [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates EvCheck object associated with the current event loop instance

## Description

```php
final public EvCheck EvLoop::check(string $callback, [string $data = ...], [string $priority = ...])
```

Creates EvCheck object associated with the current event loop instance.

## Parameters

All parameters have the same meaning as for `EvCheck::__construct()`

## Return Values

Returns EvCheck object on success.

## See Also

  `EvCheck::__construct()`
