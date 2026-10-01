---
id: "en-php-function-function-eio-poll"
language: "php"
lang: "en"
category: "function"
name: "eio_poll"
title: "Can be called whenever there are pending requests that need finishing"
signature: "int eio_poll()"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Can be called whenever there are pending requests that need finishing

## Description

```php
int eio_poll()
```

`eio_poll()` can be used to implement special event loop. For this `eio_nreqs()` could be used to test if there are unprocessed requests.

> Applicable only when implementing userspace event loop.

## Parameters

This function has no parameters.

## Return Values

If any request invocation returns a non-zero value, returns that value. Otherwise, it returns `0`.

## Examples

**`eio_poll()` example**

```php


<?php
function res_cb($data, $result) {
    var_dump($data);
    var_dump($result);
}

eio_nop(EIO_PRI_DEFAULT, "res_cb", "1");
eio_nop(EIO_PRI_DEFAULT, "res_cb", "2");
eio_nop(EIO_PRI_DEFAULT, "res_cb", "3");

while (eio_nreqs()) {
    // Some specific IPC or so
    eio_poll();
}
?>

   
```

The above example will output something similar to:

```text


string(1) "1"
int(0)
string(1) "3"
int(0)
string(1) "2"
int(0)

   
```

## See Also

 `eio_nreqs()`
