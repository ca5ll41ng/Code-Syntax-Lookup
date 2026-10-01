---
id: "en-php-function-evloop-embed"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::embed"
title: "Creates an instance of EvEmbed watcher associated with the current EvLoop object"
signature: "final public EvEmbed EvLoop::embed(string $other, [string $callback = ...], [string $data = ...], [string $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.embed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an instance of EvEmbed watcher associated with the current EvLoop object

## Description

```php
final public EvEmbed EvLoop::embed(string $other, [string $callback = ...], [string $data = ...], [string $priority = ...])
```

Creates an instance of `EvEmbed` watcher associated with the current `EvLoop` object.

## Parameters

All parameters have the same meaning as for `EvEmbed::__construct()`.

## Return Values

Returns EvEmbed object on success.

## See Also

  `EvEmbed::__construct()`
