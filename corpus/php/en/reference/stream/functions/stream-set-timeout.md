---
id: "en-php-function-function-stream-set-timeout"
language: "php"
lang: "en"
category: "function"
name: "stream_set_timeout"
title: "Set timeout period on a stream"
signature: "bool stream_set_timeout(resource $stream, int $seconds, int $microseconds = 0)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-set-timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set timeout period on a stream

## Description

```php
bool stream_set_timeout(resource $stream, int $seconds, int $microseconds = 0)
```

Sets the timeout value on `$stream`, expressed in the sum of `$seconds` and `$microseconds`.

When the stream times out, the 'timed_out' key of the array returned by `stream_get_meta_data()` is set to `true`, although no error/warning is generated.

## Parameters

- **`$stream`** — The target stream.
- **`$seconds`** — The seconds part of the timeout to be set.
- **`$microseconds`** — The microseconds part of the timeout to be set.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`stream_set_timeout()` example**

```php


<?php
$fp = fsockopen("www.example.com", 80);
if (!$fp) {
    echo "Unable to open\n";
} else {

    fwrite($fp, "GET / HTTP/1.0\r\n\r\n");
    stream_set_timeout($fp, 2);
    $res = fread($fp, 2000);

    $info = stream_get_meta_data($fp);
    fclose($fp);

    if ($info['timed_out']) {
        echo 'Connection timed out!';
    } else {
        echo $res;
    }

}
?>

    
```

## Notes

> This function doesn't work with advanced operations like `stream_socket_recvfrom()`, use `stream_select()` with timeout parameter instead.

This function was previously called as `set_socket_timeout()` and later `socket_set_timeout()` but this usage is deprecated.

## See Also

 `fsockopen()` `fopen()`
