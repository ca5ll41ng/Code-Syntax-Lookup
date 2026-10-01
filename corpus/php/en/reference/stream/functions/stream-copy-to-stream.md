---
id: "en-php-function-function-stream-copy-to-stream"
language: "php"
lang: "en"
category: "function"
name: "stream_copy_to_stream"
title: "Copies data from one stream to another"
signature: "int|false stream_copy_to_stream(resource $from, resource $to, int|null $length = null, int $offset = 0)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-copy-to-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copies data from one stream to another

## Description

```php
int|false stream_copy_to_stream(resource $from, resource $to, int|null $length = null, int $offset = 0)
```

Makes a copy of up to `$length` bytes of data from `$from` to `$to`, starting at the current position in `$from`, or at `$offset` if it is greater than `0`. If `$length` is `null`, all remaining content in `$from` will be copied.

## Parameters

- **`$from`** — The source stream
- **`$to`** — The destination stream
- **`$length`** — Maximum bytes to copy. By default all bytes left are copied.
- **`$offset`** — If greater than `0`, the position in `$from`, counted from the start of the stream, at which to start copying: `$from` is first moved to that position, as with `fseek()` and `SEEK_SET`. If `0` (the default) or negative, no seek is performed and copying starts at the current position in `$from`.

## Return Values

Returns the total count of bytes copied, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$length` is now nullable. |

## Examples

**A `stream_copy_to_stream()` example**

```php


<?php
$src = fopen('http://www.example.com', 'r');
$dest1 = fopen('first1k.txt', 'w');
$dest2 = fopen('remainder.txt', 'w');

echo stream_copy_to_stream($src, $dest1, 1024) . " bytes copied to first1k.txt\n";
echo stream_copy_to_stream($src, $dest2) . " bytes copied to remainder.txt\n";

?>

    
```

## Notes

> When `$from` is a socket stream in blocking mode, copying stops as soon as no data is received within the stream timeout, even if the end of the stream has not been reached. `false` may then be returned, even though the data read until then has already been written to `$to`. This timeout defaults to default_socket_timeout and can be changed with `stream_set_timeout()`.

## See Also

`copy()`
