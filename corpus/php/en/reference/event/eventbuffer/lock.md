---
id: "en-php-function-eventbuffer-lock"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::lock"
title: "Acquires a lock on buffer"
signature: "public void EventBuffer::lock()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Acquires a lock on buffer

## Description

```php
public void EventBuffer::lock()
```

Acquires a lock on buffer. Can be used in pair with `EventBuffer::unlock()` to make a set of operations atomic, i.e. thread-safe. Note, it is not needed to lock buffers for *individual* operations. When locking is enabled(see `EventBuffer::enableLocking()` ), individual operations on event buffers are already atomic.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `EventBuffer::unlock()`
