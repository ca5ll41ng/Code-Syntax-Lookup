---
id: "en-php-function-eventbuffer-read"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::read"
title: "Read data from an evbuffer and drain the bytes read"
signature: "public string EventBuffer::read(int $max_bytes)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from an evbuffer and drain the bytes read

## Description

```php
public string EventBuffer::read(int $max_bytes)
```

Read the first `$max_bytes` from the buffer and drain the bytes read. If more `$max_bytes` are requested than are available in the buffer, it only extracts as many bytes as available.

## Parameters

- **`$max_bytes`** — Maximum number of bytes to read from the buffer.

## Return Values

Returns string read, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL event 1.6.0 | Renamed `EventBuffer::read()`(the old method name) to `EventBuffer::read()`. `EventBuffer::read()` now takes only `$max_bytes` argument; returns string instead of integer. |

## See Also

  `EventBuffer::copyout()`   `EventBuffer::drain()`   `EventBuffer::pullup()`   `EventBuffer::readLine()`   `EventBuffer::appendFrom()`
