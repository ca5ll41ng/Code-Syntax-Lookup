---
id: "en-php-function-function-eio-cancel"
language: "php"
lang: "en"
category: "function"
name: "eio_cancel"
title: "Cancels a request"
signature: "void eio_cancel(resource $req)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancels a request

## Description

```php
void eio_cancel(resource $req)
```

`eio_cancel()` cancels a request specified by `$req`

## Parameters

- **`$req`** — The request resource
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

No value is returned.

## Examples

**`eio_cancel()` example**

```php


<?php
 /* Is called when eio_nop() finished */
 function my_nop_cb($data, $result) {
  echo "my_nop ", $data, "\n";
 }

// This eio_nop() call will be cancelled
$req = eio_nop(EIO_PRI_DEFAULT, "my_nop_cb", "1");
var_dump($req);
eio_cancel($req);

// This time eio_nop() will be processed
eio_nop(EIO_PRI_DEFAULT, "my_nop_cb", "2");

// Process requests
eio_event_loop();
?>

   
```

The above example will output something similar to:

```text


resource(4) of type (EIO Request Descriptor)
my_nop 2

   
```

## See Also

 `eio_grp_cancel()`
