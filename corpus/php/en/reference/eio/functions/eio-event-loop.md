---
id: "en-php-function-function-eio-event-loop"
language: "php"
lang: "en"
category: "function"
name: "eio_event_loop"
title: "Polls libeio until all requests proceeded"
signature: "bool eio_event_loop()"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-event-loop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Polls libeio until all requests proceeded

## Description

```php
bool eio_event_loop()
```

`eio_event_loop()` polls libeio until all requests proceeded.

## Parameters

This function has no parameters.

## Return Values

`eio_event_loop()` returns `true` on success, or `false` on failure.

## Examples

**`eio_event_loop()` example**

```php

 
<?php
$temp_filename = "eio-temp-file.tmp";
touch($temp_filename);

/* Is called when eio_chmod() finished */
function my_chmod_callback($data, $result) {
    global $temp_filename;

    if ($result == 0 && !is_readable($temp_filename) && is_writable($temp_filename)) {
        echo "eio_chmod_ok";
    }

    @unlink($temp_filename);
}

eio_chmod($temp_filename, 0200, EIO_PRI_DEFAULT, "my_chmod_callback");
eio_event_loop();
?>

```

The above example will output something similar to:

```text

 
eio_chmod_ok
 
 
```

## See Also

 `eio_poll()`
