---
id: "en-php-function-function-eio-sendfile"
language: "php"
lang: "en"
category: "function"
name: "eio_sendfile"
title: "Transfer data between file descriptors"
signature: "resource eio_sendfile(mixed $out_fd, mixed $in_fd, int $offset, int $length, [int $pri = ...], [callable $callback = ...], [string $data = ...])"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-sendfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transfer data between file descriptors

## Description

```php
resource eio_sendfile(mixed $out_fd, mixed $in_fd, int $offset, int $length, [int $pri = ...], [callable $callback = ...], [string $data = ...])
```

`eio_sendfile()` copies data between one file descriptor and another. See `SENDFILE(2)` man page for details.

## Parameters

- **`$out_fd`** — Output stream, Socket resource, or file descriptor. Should be opened for writing.
- **`$in_fd`** — Input stream, Socket resource, or file descriptor. Should be opened for reading.
- **`$offset`** — Offset within the source file.
- **`$length`** — Number of bytes to copy.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_sendfile()` returns request resource on success, or `false` on failure.
