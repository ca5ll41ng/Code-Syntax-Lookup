---
id: "en-php-function-function-stream-set-read-buffer"
language: "php"
lang: "en"
category: "function"
name: "stream_set_read_buffer"
title: "Set read file buffering on the given stream"
signature: "int stream_set_read_buffer(resource $stream, int $size)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-set-read-buffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set read file buffering on the given stream

## Description

```php
int stream_set_read_buffer(resource $stream, int $size)
```

Sets the read buffer. It's the equivalent of `stream_set_write_buffer()`, but for read operations.

## Parameters

- **`$stream`** — The file pointer.
- **`$size`** — The number of bytes to buffer. If `$size` is 0 then read operations are unbuffered. This ensures that all reads with `fread()` are completed before other processes are allowed to read from that input stream.

## Return Values

Returns 0 on success, or another value if the request cannot be honored.

## See Also

 `stream_set_write_buffer()`
