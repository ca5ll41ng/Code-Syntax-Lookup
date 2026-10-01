---
id: "en-php-function-eventbufferevent-settimeouts"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::setTimeouts"
title: "Set the read and write timeout for a buffer event"
signature: "public bool EventBufferEvent::setTimeouts(float $timeout_read, float $timeout_write)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.settimeouts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the read and write timeout for a buffer event

## Description

```php
public bool EventBufferEvent::setTimeouts(float $timeout_read, float $timeout_write)
```

Set the read and write timeout for a buffer event

## Parameters

- **`$timeout_read`** — Read timeout
- **`$timeout_write`** — Write timeout

## Return Values

Returns `true` on success or `false` on failure.
