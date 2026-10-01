---
id: "en-php-function-evembed-createstopped"
language: "php"
lang: "en"
category: "function"
name: "EvEmbed::createStopped"
title: "Create stopped EvEmbed watcher object"
signature: "final public static void EvEmbed::createStopped(object $other, [callable $callback = ...], [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evembed.createstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create stopped EvEmbed watcher object

## Description

```php
final public static void EvEmbed::createStopped(object $other, [callable $callback = ...], [mixed $data = ...], [int $priority = ...])
```

The same as `EvEmbed::__construct()`, but doesn't start the watcher automatically.

## Parameters

- **`$other`** — The same as for `EvEmbed::__construct()`
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Return Values

Returns stopped EvEmbed object on success.

## See Also

  `EvEmbed::__construct()`   `Ev::embeddableBackends()`
