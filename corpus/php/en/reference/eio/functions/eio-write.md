---
id: "en-php-function-function-eio-write"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1,2]}
name: "eio_write"
title: "Write to file"
signature: "resource eio_write(mixed $fd, string $str, int $length = 0, int $offset = 0, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write to file

## Description

```php
resource eio_write(mixed $fd, string $str, int $length = 0, int $offset = 0, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_write()` writes up to `$length` bytes from `$str` at `$offset` offset from the beginning of the file.

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor, e.g. returned by `eio_open()`
- **`$str`** — Source string
- **`$length`** — Maximum number of bytes to write.
- **`$offset`** — Offset from the beginning of file.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_write()` returns request resource on success, or `false` on failure.

## See Also

 `eio_open()`
