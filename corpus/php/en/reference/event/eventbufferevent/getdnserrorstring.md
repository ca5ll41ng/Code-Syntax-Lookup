---
id: "en-php-function-eventbufferevent-getdnserrorstring"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::getDnsErrorString"
title: "Returns string describing the last failed DNS lookup attempt"
signature: "public string EventBufferEvent::getDnsErrorString()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.getdnserrorstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns string describing the last failed DNS lookup attempt

## Description

```php
public string EventBufferEvent::getDnsErrorString()
```

Returns string describing the last failed DNS lookup attempt made by `EventBufferEvent::connectHost()`, or an empty string, if there is no DNS error detected.

## Parameters

This function has no parameters.

## Return Values

Returns a string describing DNS lookup error, or an empty string for no error.

## See Also

  `EventBufferEvent::connectHost()`
