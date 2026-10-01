---
id: "en-php-function-function-eio-close"
language: "php"
lang: "en"
category: "function"
name: "eio_close"
title: "Close file"
signature: "resource eio_close(mixed $fd, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close file

## Description

```php
resource eio_close(mixed $fd, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_close()` closes file specified by `$fd`.

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_close()` returns request resource on success, or `false` on failure.

## See Also

 `eio_open()`
