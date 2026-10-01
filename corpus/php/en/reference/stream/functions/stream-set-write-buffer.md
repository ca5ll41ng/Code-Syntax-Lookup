---
id: "en-php-function-function-stream-set-write-buffer"
language: "php"
lang: "en"
category: "function"
name: "stream_set_write_buffer"
title: "Sets write file buffering on the given stream"
signature: "int stream_set_write_buffer(resource $stream, int $size)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-set-write-buffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets write file buffering on the given stream

## Description

```php
int stream_set_write_buffer(resource $stream, int $size)
```

Sets the buffering for write operations on the given `$stream` to `$size` bytes.

## Parameters

- **`$stream`** — The file pointer.
- **`$size`** — The number of bytes to buffer. If `$size` is 0 then write operations are unbuffered. This ensures that all writes with `fwrite()` are completed before other processes are allowed to write to that output stream.

## Return Values

Returns 0 on success, or another value if the request cannot be honored.

## Examples

**`stream_set_write_buffer()` example**

The following example demonstrates how to use `stream_set_write_buffer()` to create an unbuffered stream.

```php


<?php
$fp = fopen($file, "w");
if ($fp) {
  if (stream_set_write_buffer($fp, 0) !== 0) {
      // changing the buffering failed
  }
  fwrite($fp, $output);
  fclose($fp);
}
?>

    
```

## See Also

 `fopen()` `fwrite()`
