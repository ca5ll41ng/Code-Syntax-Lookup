---
id: "en-php-function-evloop-construct"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::__construct"
title: "Constructs the event loop object"
signature: "public EvLoop::__construct([int $flags = ...], mixed $data = NULL, float $io_interval = 0.0, float $timeout_interval = 0.0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the event loop object

## Description

```php
public EvLoop::__construct([int $flags = ...], mixed $data = NULL, float $io_interval = 0.0, float $timeout_interval = 0.0)
```

Constructs the event loop object.

## Parameters

- **`$flags`** — One of the event loop flags
- **`$data`** — Custom data associated with the loop.
- **`$io_interval`** — See io_interval
- **`$timeout_interval`** — See timeout_interval

## See Also

  `EvLoop::defaultLoop()`
