---
id: "en-php-function-eventbufferevent-writebuffer"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::writeBuffer"
title: "Adds contents of the entire buffer to a buffer event's output buffer"
signature: "public bool EventBufferEvent::writeBuffer(EventBuffer $buf)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.writebuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds contents of the entire buffer to a buffer event's output buffer

## Description

```php
public bool EventBufferEvent::writeBuffer(EventBuffer $buf)
```

Adds contents of the entire buffer to a buffer event's output buffer

## Parameters

- **`$buf`** — Source `EventBuffer` object.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBufferEvent::write()`
