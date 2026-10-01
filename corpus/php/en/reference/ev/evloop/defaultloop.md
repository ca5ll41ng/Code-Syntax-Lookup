---
id: "en-php-function-evloop-defaultloop"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::defaultLoop"
title: "Returns or creates the default event loop"
signature: "public static EvLoop EvLoop::defaultLoop(int $flags = Ev::FLAG_AUTO, mixed $data = NULL, float $io_interval = 0., float $timeout_interval = 0.)"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.defaultloop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns or creates the default event loop

## Description

```php
public static EvLoop EvLoop::defaultLoop(int $flags = Ev::FLAG_AUTO, mixed $data = NULL, float $io_interval = 0., float $timeout_interval = 0.)
```

If the default event loop is not created, `EvLoop::defaultLoop()` creates it with the specified parameters. Otherwise, it just returns the object representing previously created instance ignoring all the parameters.

## Parameters

- **`$flags`** — One of the event loop flags
- **`$data`** — Custom data to associate with the loop.
- **`$io_collect_interval`** — See io_interval
- **`$timeout_collect_interval`** — See timeout_interval

## Return Values

Returns EvLoop object on success.

## See Also

  `EvLoop::__construct()`
