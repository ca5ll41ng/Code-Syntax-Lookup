---
id: "en-php-function-eventbufferevent-readbuffer"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::readBuffer"
title: "Drains the entire contents of the input buffer and places them into buf"
signature: "public bool EventBufferEvent::readBuffer(EventBuffer $buf)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.readbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Drains the entire contents of the input buffer and places them into buf

## Description

```php
public bool EventBufferEvent::readBuffer(EventBuffer $buf)
```

Drains the entire contents of the input buffer and places them into `$buf`.

## Parameters

- **`$buf`** — Target buffer

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBufferEvent::read()`
