---
id: "en-php-function-function-eio-symlink"
language: "php"
lang: "en"
category: "function"
name: "eio_symlink"
title: "Create a symbolic link"
signature: "resource eio_symlink(string $path, string $new_path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-symlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a symbolic link

## Description

```php
resource eio_symlink(string $path, string $new_path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_symlink()` creates a symbolic link `$new_path` to `$path`.

## Parameters

- **`$path`** — Source path
- **`$new_path`** — Target path
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_symlink()` returns request resource on success, or `false` on failure.

## Examples

**`eio_symlink()` example**

```php


<?php
$filename = dirname(__FILE__)."/symlink.dat";
touch($filename);
$link = dirname(__FILE__)."/symlink.link";

function my_symlink_cb($data, $result) {
    global $link, $filename;
    var_dump(file_exists($data) && is_link($data));

    if (!eio_readlink($data, EIO_PRI_DEFAULT, "my_readlink_cb", NULL)) {
        @unlink($link);
        @unlink($filename);
    }
}

function my_readlink_cb($data, $result) {
    global $filename, $link;
    var_dump($result);

    @unlink($link);
    @unlink($filename);
}

eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


bool(true)
string(16) "/tmp/symlink.dat"

   
```

## See Also

 `eio_link()`
