---
id: "en-php-function-eventbuffer-write"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::write"
title: "Write contents of the buffer to a file or socket"
signature: "public int EventBuffer::write(mixed $fd, [int $howmuch = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write contents of the buffer to a file or socket

## Description

```php
public int EventBuffer::write(mixed $fd, [int $howmuch = ...])
```

Write contents of the buffer to a file descriptor. The buffer will be drained after the bytes have been successfully written.

## Parameters

- **`$fd`** — Socket resource, stream or numeric file descriptor normally associated with a socket.
- **`$howmuch`** — The maximum number of bytes to write.

## Return Values

Returns the number of bytes written, or `false` on error.

## See Also

  `EventBuffer::read()`
