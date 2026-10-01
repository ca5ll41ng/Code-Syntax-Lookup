---
id: "en-php-function-function-eio-grp"
language: "php"
lang: "en"
category: "function"
name: "eio_grp"
title: "Creates a request group"
signature: "resource eio_grp(callable $callback, string $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-grp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a request group

## Description

```php
resource eio_grp(callable $callback, string $data = NULL)
```

`eio_grp()` creates a request group.

## Parameters

- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_grp()` returns request group resource on success, or `false` on failure.

## Examples

**`eio_grp()` example**

```php


<?php
$temp_filename = dirname(__FILE__) ."/eio-file.tmp";
$fp = fopen($temp_filename, "w");
fwrite($fp, "some data");
fclose($fp);
$my_file_fd = NULL;

/* Is called when the group requests are done */
function my_grp_done($data, $result) {
 // Remove the file, if it still exists
 @unlink($data);
}

/* Is called when the temporary file is opened */
function my_grp_file_opened_callback($data, $result) {
 global $my_file_fd, $grp;

 $my_file_fd = $result;

 $req = eio_read($my_file_fd, 4, 0,
   EIO_PRI_DEFAULT, "my_grp_file_read_callback");
 eio_grp_add($grp, $req);
}

/* Is called when the file is read */
function my_grp_file_read_callback($data, $result) {
 global $my_file_fd, $grp;

 var_dump($result);

 // Create request to close the file
 $req = eio_close($my_file_fd);

 // Add request to the group
 eio_grp_add($grp, $req);
}

// Create request group
$grp = eio_grp("my_grp_done", $temp_filename);

// Create request
$req = eio_open($temp_filename, EIO_O_RDWR | EIO_O_APPEND , NULL,
  EIO_PRI_DEFAULT, "my_grp_file_opened_callback", NULL);

// Add request to the group
eio_grp_add($grp, $req);

// Process requests
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


string(4) "some"

   
```

## See Also

 `eio_grp_cancel()` `eio_grp_add()`
