---
id: "en-php-function-eventbufferevent-enable"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::enable"
title: "Enable events read, write, or both on a buffer event"
signature: "public bool EventBufferEvent::enable(int $events)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.enable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable events read, write, or both on a buffer event

## Description

```php
public bool EventBufferEvent::enable(int $events)
```

Enable events `Event::READ`, `Event::WRITE`, or `Event::READ` `|` `Event::WRITE` on a buffer event.

## Parameters

- **`$events`** — `Event::READ`, `Event::WRITE`, or `Event::READ` `|` `Event::WRITE` on a buffer event.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBufferEvent::disable()`
