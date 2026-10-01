---
id: "en-php-function-eventbufferevent-close"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::close"
title: "Closes file descriptor associated with the current buffer event"
signature: "public void EventBufferEvent::close()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes file descriptor associated with the current buffer event

## Description

```php
public void EventBufferEvent::close()
```

Closes file descriptor associated with the current buffer event.

This method may be used in cases when the `EventBufferEvent::OPT_CLOSE_ON_FREE` option is not appropriate.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
