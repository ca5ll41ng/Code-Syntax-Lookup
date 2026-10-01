---
id: "en-php-function-eventhttprequest-getbufferevent"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::getBufferEvent"
title: "Returns EventBufferEvent object"
signature: "public EventBufferEvent EventHttpRequest::getBufferEvent()"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.getbufferevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns EventBufferEvent object

## Description

```php
public EventBufferEvent EventHttpRequest::getBufferEvent()
```

Returns `EventBufferEvent` object which represents buffer event that the connection is using.

> The reference counter of the returned object will be incremented by one to protect internal structures against premature destruction when the method is called from a user callback. So the `EventBufferEvent` object should be freed explicitly with `EventBufferEvent::free()` method. Otherwise memory will leak.

## Parameters

This function has no parameters.

## Return Values

Returns `EventBufferEvent` object.

## See Also

  `EventHttpRequest::getConnection()`
