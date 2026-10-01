---
id: "en-php-function-function-eio-rmdir"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "eio_rmdir"
title: "Remove a directory"
signature: "resource eio_rmdir(string $path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-rmdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a directory

## Description

```php
resource eio_rmdir(string $path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_rmdir()` removes a directory.

## Parameters

- **`$path`** — Directory path
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_rmdir()` returns request resource on success, or `false` on failure.

## Examples

**`eio_rmdir()` example**

```php


<?php
$temp_dirname = "eio-temp-dir";
mkdir($temp_dirname);

function my_rmdir_callback($data, $result) {
    if ($result == 0 && !file_exists($data)) {
        echo "eio_rmdir_ok";
    } else if (file_exists($data)) {
        rmdir($data);
    }
}


eio_rmdir($temp_dirname, EIO_PRI_DEFAULT, "my_rmdir_callback", $temp_dirname);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


eio_rmdir_ok

   
```

## See Also

 `eio_mkdir()`
