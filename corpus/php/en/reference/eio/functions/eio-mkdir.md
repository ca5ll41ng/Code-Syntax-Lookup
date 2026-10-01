---
id: "en-php-function-function-eio-mkdir"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "eio_mkdir"
title: "Create directory"
signature: "resource eio_mkdir(string $path, int $mode, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create directory

## Description

```php
resource eio_mkdir(string $path, int $mode, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_mkdir()` creates directory with specified access `$mode`.

## Parameters

- **`$path`** — Path for the new directory.
- **`$mode`** — Access mode, e.g. 0755
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_mkdir()` returns request resource on success, or `false` on failure.

## Examples

**`eio_mkdir()` example**

```php


<?php
$temp_dirname = "eio-temp-dir";

/* Is called when eio_mkdir() finishes */
function my_mkdir_callback($data, $result) {
 if ($result == 0 && is_dir($temp_dirname)
   && !is_readable($temp_dirname)
   && is_writable($temp_dirname)) {
  echo "eio_mkdir_ok";
 }

 // Remove directory
    if (file_exists($data))
        rmdir($temp_dirname);
}

// Create directory with access mode 0300
eio_mkdir($temp_dirname, 0300, EIO_PRI_DEFAULT, "my_mkdir_callback", $temp_dirname);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


eio_mkdir_ok

   
```

## See Also

 `eio_rmdir()`
