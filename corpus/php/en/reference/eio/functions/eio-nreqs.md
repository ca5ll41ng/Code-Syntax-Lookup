---
id: "en-php-function-function-eio-nreqs"
language: "php"
lang: "en"
category: "function"
name: "eio_nreqs"
title: "Returns number of requests to be processed"
signature: "int eio_nreqs()"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-nreqs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns number of requests to be processed

## Description

```php
int eio_nreqs()
```

`eio_nreqs()` could be called in a custom loop calling `eio_poll()`.

## Parameters

This function has no parameters.

## Return Values

`eio_nreqs()` returns number of requests to be processed.

## Examples

**`eio_nreqs()` example**

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

 `eio_poll()` `eio_nready()`
