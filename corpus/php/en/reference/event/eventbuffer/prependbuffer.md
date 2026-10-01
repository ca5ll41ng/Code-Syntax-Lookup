---
id: "en-php-function-eventbuffer-prependbuffer"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::prependBuffer"
title: "Moves all data from source buffer to the front of current buffer"
signature: "public bool EventBuffer::prependBuffer(EventBuffer $buf)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.prependbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moves all data from source buffer to the front of current buffer

## Description

```php
public bool EventBuffer::prependBuffer(EventBuffer $buf)
```

Behaves as `EventBuffer::addBuffer()`, except that it moves data to the front of the buffer.

## Parameters

- **`$buf`** — Source buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::add()`   `EventBuffer::addBuffer()`   `EventBuffer::prepend()`
