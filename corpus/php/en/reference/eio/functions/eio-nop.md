---
id: "en-php-function-function-eio-nop"
language: "php"
lang: "en"
category: "function"
name: "eio_nop"
title: "Does nothing, except go through the whole request cycle"
signature: "resource eio_nop(int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-nop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Does nothing, except go through the whole request cycle

## Description

```php
resource eio_nop(int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_nop()` does nothing, except go through the whole request cycle. Could be useful in debugging.

## Parameters

- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_nop()` returns request resource on success, or `false` on failure.

## See Also

 `eio_busy()`
