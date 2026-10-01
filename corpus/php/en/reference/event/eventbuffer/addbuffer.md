---
id: "en-php-function-eventbuffer-addbuffer"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::addBuffer"
title: "Move all data from a buffer provided to the current instance of EventBuffer"
signature: "public bool EventBuffer::addBuffer(EventBuffer $buf)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.addbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move all data from a buffer provided to the current instance of EventBuffer

## Description

```php
public bool EventBuffer::addBuffer(EventBuffer $buf)
```

Move all data from the buffer provided in `$buf` parameter to the end of current `EventBuffer`. This is a destructive add. The data from one buffer moves into the other buffer. However, no unnecessary memory copies occur.

## Parameters

- **`$buf`** — The source EventBuffer object.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::add()`
