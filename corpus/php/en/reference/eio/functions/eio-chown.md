---
id: "en-php-function-function-eio-chown"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "eio_chown"
title: "Change file/directory ownership"
signature: "resource eio_chown(string $path, int $uid, int $gid = -1, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-chown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change file/directory ownership

## Description

```php
resource eio_chown(string $path, int $uid, int $gid = -1, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_chown()` changes ownership of a file, or directory. The new owner is specified by `$uid`, and the group by `$gid`.

## Parameters

- **`$path`** — Path to file or directory.
  > Avoid relative paths


- **`$uid`** — User ID. Is ignored when equal to -1.
- **`$gid`** — Group ID. Is ignored when equal to -1.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_chown()` returns request resource on success, or `false` on failure.

## See Also

 `eio_chmod()`
