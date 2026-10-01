---
id: "en-php-function-eventbufferevent-free"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::free"
title: "Free a buffer event"
signature: "public void EventBufferEvent::free()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free a buffer event

## Description

```php
public void EventBufferEvent::free()
```

Free resources allocated by buffer event.

Usually there is no need to call this method, since normally it is done within internal object destructors. However, sometimes we have a long-time script allocating lots of instances, or a script with a heavy memory usage, where we need to free resources as soon as possible. In such cases `EventBufferEvent::free()` may be used to protect the script against running up to the `memory_limit`.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
