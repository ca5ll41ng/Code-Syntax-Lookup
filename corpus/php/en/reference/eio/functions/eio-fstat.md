---
id: "en-php-function-function-eio-fstat"
language: "php"
lang: "en"
category: "function"
name: "eio_fstat"
title: "Get file status"
signature: "resource eio_fstat(mixed $fd, int $pri, callable $callback, [mixed $data = ...])"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-fstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get file status

## Description

```php
resource eio_fstat(mixed $fd, int $pri, callable $callback, [mixed $data = ...])
```

`eio_fstat()` returns file status information in `$result` argument of `$callback`

## Parameters

- **`$fd`** — Stream, Socket resource, or numeric file descriptor.
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_fstat()` returns request resource on success, or `false` on failure.

## Examples

**`eio_fstat()` example**

```php


<?php
// Create temporary file
$tmp_filename = dirname(__FILE__) ."/eio-file.tmp";
touch($tmp_filename);

/* Is called when eio_fstat() done */
function my_res_cb($data, $result) {
 // Should output array with stat info
 var_dump($result);

 if ($data['fd']) {
  // Close temporary file
  eio_close($data['fd']);
  eio_event_loop();
 }
 // Remove temporary file
 @unlink($data['file']);
}

/* Is called when eio_open() done */
function my_open_cb($data, $result) {
 // Prepare data for callback
 $d = array(
  'fd'  => $result,
  'file'=> $data
 );
 // Request stat info
 eio_fstat($result, EIO_PRI_DEFAULT, "my_res_cb", $d);
 // Process request(s)
 eio_event_loop();
}

// Open temporary file
eio_open($tmp_filename, EIO_O_RDONLY, NULL, EIO_PRI_DEFAULT,
  "my_open_cb", $tmp_filename);
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


array(12) {
 ["st_dev"]=>
  int(2050)
  ["st_ino"]=>
  int(2489159)
  ["st_mode"]=>
  int(33188)
  ["st_nlink"]=>
  int(1)
  ["st_uid"]=>
  int(1000)
  ["st_gid"]=>
  int(100)
  ["st_rdev"]=>
  int(0)
  ["st_blksize"]=>
  int(4096)
  ["st_blocks"]=>
  int(0)
  ["st_atime"]=>
  int(1318239506)
  ["st_mtime"]=>
  int(1318239506)
  ["st_ctime"]=>
  int(1318239506)
}

   
```

## See Also

 `eio_lstat()` `eio_stat()`
