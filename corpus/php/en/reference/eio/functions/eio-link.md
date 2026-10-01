---
id: "en-php-function-function-eio-link"
language: "php"
lang: "en"
category: "function"
name: "eio_link"
title: "Create a hardlink for file"
signature: "resource eio_link(string $path, string $new_path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-link.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a hardlink for file

## Description

```php
resource eio_link(string $path, string $new_path, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_link()` creates a hardlink `$new_path` for a file specified by `$path`.

## Parameters

- **`$path`** — Source file path.
- **`$new_path`** — Target file path.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

## Examples

**`eio_link()` example**

```php


<?php
$filename = dirname(__FILE__)."/symlink.dat";
touch($filename);
$link = dirname(__FILE__)."/symlink.link";
$hardlink = dirname(__FILE__)."/hardlink.link";

function my_hardlink_cb($data, $result) {
    global $link, $filename;
    var_dump(file_exists($data) && !is_link($data));
    @unlink($data);

    eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);
}

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

eio_link($filename, $hardlink, EIO_PRI_DEFAULT, "my_hardlink_cb", $hardlink);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
string(%d) "%ssymlink.dat"

   
```

## See Also

 `eio_symlink()`
