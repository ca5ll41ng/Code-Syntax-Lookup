---
id: "en-php-function-function-eio-fallocate"
language: "php"
lang: "en"
category: "function"
name: "eio_fallocate"
title: "Allows the caller to directly manipulate the allocated disk space for a file"
signature: "resource eio_fallocate(mixed $fd, int $mode, int $offset, int $length, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-fallocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allows the caller to directly manipulate the allocated disk space for a file

## Description

```php
resource eio_fallocate(mixed $fd, int $mode, int $offset, int $length, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_fallocate()` allows the caller to directly manipulate the allocated disk space for the file specified by `$fd` file descriptor for the byte range starting at `$offset` and continuing for `$length` bytes.

> File should be opened for writing
>
> `EIO_O_CREAT` should be logically *OR*'d with `EIO_O_WRONLY`, or `EIO_O_RDWR`

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor, e.g. returned by `eio_open()`.
- **`$mode`** — Currently only one flag is supported for mode: `EIO_FALLOC_FL_KEEP_SIZE` (the same as POSIX constant `FALLOC_FL_KEEP_SIZE`).
- **`$offset`** — Specifies start of the byte range.
- **`$length`** — Specifies length of the byte range.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_fallocate()` returns request resource on success, or `false` on failure.
