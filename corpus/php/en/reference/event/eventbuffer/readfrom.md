---
id: "en-php-function-eventbuffer-readfrom"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::readFrom"
title: "Read data from a file onto the end of the buffer"
signature: "public int EventBuffer::read(mixed $fd, int $howmuch)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.readfrom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from a file onto the end of the buffer

## Description

```php
public int EventBuffer::read(mixed $fd, int $howmuch)
```

Read data from the file specified by `$fd` onto the end of the buffer.

## Parameters

- **`$fd`** — Socket resource, stream, or numeric file descriptor.
- **`$howmuch`** — Maximum number of bytes to read.

## Return Values

Returns the number of bytes read, or `false` on failure.

## See Also

  `EventBuffer::copyout()`   `EventBuffer::drain()`   `EventBuffer::pullup()`   `EventBuffer::readLine()`   `EventBuffer::appendFrom()`
