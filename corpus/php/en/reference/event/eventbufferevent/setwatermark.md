---
id: "en-php-function-eventbufferevent-setwatermark"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::setWatermark"
title: "Adjusts read and/or write watermarks"
signature: "public void EventBufferEvent::setWatermark(int $events, int $lowmark, int $highmark)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.setwatermark.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts read and/or write watermarks

## Description

```php
public void EventBufferEvent::setWatermark(int $events, int $lowmark, int $highmark)
```

Adjusts the read watermarks, the write *watermarks*, or both, of a single buffer event.

A buffer event watermark is an edge, a value specifying number of bytes to be read or written before callback is invoked. By default every read/write event triggers a callback invocation. See [Fast portable non-blocking network programming with Libevent: Callbacks and watermarks](http://www.wangafu.net/~nickm/libevent-book/Ref6_bufferevent.html#_callbacks_and_watermarks)

## Parameters

- **`$events`** — Bitmask of `Event::READ`, `Event::WRITE`, or both.
- **`$lowmark`** — Minimum watermark value.
- **`$highmark`** — Maximum watermark value. `0` means "unlimited".

## Return Values

No value is returned.
