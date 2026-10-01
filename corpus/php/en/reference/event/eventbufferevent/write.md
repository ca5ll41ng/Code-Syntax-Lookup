---
id: "en-php-function-eventbufferevent-write"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::write"
title: "Adds data to a buffer event's output buffer"
signature: "public bool EventBufferEvent::write(string $data)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds data to a buffer event's output buffer

## Description

```php
public bool EventBufferEvent::write(string $data)
```

Adds `$data` to a buffer event's output buffer

## Parameters

- **`$data`** — Data to be added to the underlying buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBufferEvent::writeBuffer()`
