---
id: "en-php-function-function-eio-chmod"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "eio_chmod"
title: "Change file/directory permissions"
signature: "resource eio_chmod(string $path, int $mode, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-chmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change file/directory permissions

## Description

```php
resource eio_chmod(string $path, int $mode, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_chmod()` changes file, or directory permissions. The new permissions are specified by `$mode`.

## Parameters

- **`$path`** — Path to the target file or directory
  > Avoid relative paths


- **`$mode`** — The new permissions. E.g. `0644`.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_chmod()` returns request resource on success, or `false` on failure.

## See Also

 `eio_chown()`
