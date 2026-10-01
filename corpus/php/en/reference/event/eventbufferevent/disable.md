---
id: "en-php-function-eventbufferevent-disable"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::disable"
title: "Disable events read, write, or both on a buffer event"
signature: "public bool EventBufferEvent::disable(int $events)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.disable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disable events read, write, or both on a buffer event

## Description

```php
public bool EventBufferEvent::disable(int $events)
```

Disable events `Event::READ`, `Event::WRITE`, or `Event::READ` `|` `Event::WRITE` on a buffer event.

## Parameters

- **`$events`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBufferEvent::enable()`
