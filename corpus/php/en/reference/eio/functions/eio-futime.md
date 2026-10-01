---
id: "en-php-function-function-eio-futime"
language: "php"
lang: "en"
category: "function"
name: "eio_futime"
title: "Change file last access and modification times"
signature: "resource eio_futime(mixed $fd, float $atime, float $mtime, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-futime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change file last access and modification times

## Description

```php
resource eio_futime(mixed $fd, float $atime, float $mtime, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_futime()` changes file last access and modification times.

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor, e.g. returned by `eio_open()`
- **`$atime`** — Access time
- **`$mtime`** — Modification time
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_futime()` returns request resource on success, or `false` on failure.

## See Also

 `eio_utime()`
