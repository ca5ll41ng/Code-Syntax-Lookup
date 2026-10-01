---
id: "en-php-function-function-eio-fstatvfs"
language: "php"
lang: "en"
category: "function"
name: "eio_fstatvfs"
title: "Get file system statistics"
signature: "resource eio_fstatvfs(mixed $fd, int $pri, callable $callback, [mixed $data = ...])"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-fstatvfs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get file system statistics

## Description

```php
resource eio_fstatvfs(mixed $fd, int $pri, callable $callback, [mixed $data = ...])
```

`eio_fstatvfs()` returns file system statistics in `$result` of `$callback`.

## Parameters

- **`$fd`** — A file descriptor of a file within the mounted file system.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_fstatvfs()` returns request resource on success, or `false` on failure.

## See Also

 `eio_statvfs()`
