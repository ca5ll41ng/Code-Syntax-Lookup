---
id: "en-php-function-eventbufferevent-read"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::read"
title: "Read buffer's data"
signature: "public string EventBufferEvent::read(int $size)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read buffer's data

## Description

```php
public string EventBufferEvent::read(int $size)
```

Removes up to `$size` bytes from the input buffer. Returns a string of data read from the input buffer.

## Parameters

- **`$size`** — Maximum number of bytes to read

## Return Values

Returns string of data read from the input buffer.

## See Also

  `EventBufferEvent::readBuffer()`
