---
id: "en-php-function-function-eio-readahead"
language: "php"
lang: "en"
category: "function"
name: "eio_readahead"
title: "Perform file readahead into page cache"
signature: "resource eio_readahead(mixed $fd, int $offset, int $length, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-readahead.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform file readahead into page cache

## Description

```php
resource eio_readahead(mixed $fd, int $offset, int $length, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_readahead()` populates the page cache with data from a file so that subsequent reads from that file will not block on disk I/O. See `READAHEAD(2)` man page for details.

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor
- **`$offset`** — Starting point from which data is to be read.
- **`$length`** — Number of bytes to be read.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_readahead()` returns request resource on success, or `false` on failure.
