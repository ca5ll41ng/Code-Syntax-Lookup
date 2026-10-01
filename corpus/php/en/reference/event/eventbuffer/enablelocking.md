---
id: "en-php-function-eventbuffer-enablelocking"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::enableLocking"
title: ""
signature: "public void EventBuffer::enableLocking()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.enablelocking.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# EventBuffer::enableLocking

## Description

```php
public void EventBuffer::enableLocking()
```

Enable locking on an `EventBuffer` so that it can safely be used by multiple threads at the same time. When locking is enabled, the lock will be held when callbacks are invoked. This could result in deadlock if you aren't careful. Plan accordingly!

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  [Evbuffers and Thread-safety]()
