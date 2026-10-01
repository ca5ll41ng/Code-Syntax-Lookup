---
id: "en-php-function-function-eio-busy"
language: "php"
lang: "en"
category: "function"
name: "eio_busy"
title: "Artificially increase load. Could be useful in tests, benchmarking"
signature: "resource eio_busy(int $delay, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-busy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Artificially increase load. Could be useful in tests, benchmarking

## Description

```php
resource eio_busy(int $delay, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_busy()` artificially increases load taking `$delay` seconds to execute. May be used for debugging, or benchmarking.

## Parameters

- **`$delay`** — Delay in seconds
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — This callback is called when all the group requests are done.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_busy()` returns request resource on success, or `false` on failure.

## See Also

 `eio_nop()`
