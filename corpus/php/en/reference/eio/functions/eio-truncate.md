---
id: "en-php-function-function-eio-truncate"
language: "php"
lang: "en"
category: "function"
name: "eio_truncate"
title: "Truncate a file"
signature: "resource eio_truncate(string $path, int $offset = 0, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-truncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Truncate a file

## Description

```php
resource eio_truncate(string $path, int $offset = 0, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_truncate()` causes the regular file named by `$path` to be truncated to a size of precisely `$length` bytes

## Parameters

- **`$path`** — File path
- **`$offset`** — Offset from beginning of the file.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_truncate()` returns request resource on success, or `false` on failure.

## See Also

 `eio_ftruncate()`
