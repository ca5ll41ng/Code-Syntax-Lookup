---
id: "en-php-function-function-eio-statvfs"
language: "php"
lang: "en"
category: "function"
name: "eio_statvfs"
title: "Get file system statistics"
signature: "resource eio_statvfs(string $path, int $pri, callable $callback, [mixed $data = ...])"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-statvfs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get file system statistics

## Description

```php
resource eio_statvfs(string $path, int $pri, callable $callback, [mixed $data = ...])
```

`eio_statvfs()` returns file system statistics information in `$result` argument of `$callback`

## Parameters

- **`$path`** — Pathname of any file within the mounted file system
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_statvfs()` returns request resource on success, or `false` on failure. On success assigns `$result` argument of `$callback` to an array.

## Examples

**`eio_statvfs()` example**

```php


<?php
$tmp_filename = '/tmp/eio-file.tmp';
touch($tmp_filename);

function my_statvfs_callback($data, $result) {
    var_dump($data);
    var_dump($result);

 @unlink($data);
}

eio_statvfs($tmp_filename, EIO_PRI_DEFAULT, "my_statvfs_callback", $tmp_filename);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


string(17) "/tmp/eio-file.tmp"
array(11) {
  ["f_bsize"]=>
  int(4096)
  ["f_frsize"]=>
  int(4096)
  ["f_blocks"]=>
  int(262144)
  ["f_bfree"]=>
  int(262111)
  ["f_bavail"]=>
  int(262111)
  ["f_files"]=>
  int(1540815)
  ["f_ffree"]=>
  int(1540743)
  ["f_favail"]=>
  int(1540743)
  ["f_fsid"]=>
  int(0)
  ["f_flag"]=>
  int(4102)
  ["f_namemax"]=>
  int(255)
}

   
```
