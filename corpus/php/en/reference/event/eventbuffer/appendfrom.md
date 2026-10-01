---
id: "en-php-function-eventbuffer-appendfrom"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::appendFrom"
title: "Moves the specified number of bytes from a source buffer to the end of the current buffer"
signature: "public int EventBuffer::appendFrom(EventBuffer $buf, int $len)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.appendfrom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moves the specified number of bytes from a source buffer to the end of the current buffer

## Description

```php
public int EventBuffer::appendFrom(EventBuffer $buf, int $len)
```

Moves the specified number of bytes from a source buffer to the end of the current buffer. If there are fewer number of bytes, it moves all the bytes available from the source buffer.

## Parameters

- **`$buf`** — Source buffer.
- **`$len`**

## Return Values

Returns the number of bytes read.

## Changelog

|  |  |
| --- | --- |
| PECL event 1.6.0 | Renamed `EventBuffer::appendFrom()`(the old method name) to `EventBuffer::appendFrom()`. |

## See Also

  `EventBuffer::copyout()`   `EventBuffer::drain()`   `EventBuffer::pullup()`   `EventBuffer::readLine()`   `EventBuffer::read()`
