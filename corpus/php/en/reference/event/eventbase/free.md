---
id: "en-php-function-eventbase-free"
language: "php"
lang: "en"
category: "function"
name: "EventBase::free"
title: "Free resources allocated for this event base"
signature: "public void EventBase::free()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free resources allocated for this event base

## Description

```php
public void EventBase::free()
```

Deallocates resources allocated by libevent for the `EventBase` object.

> The `EventBase::free()` method doesn't destruct the object itself. To destruct the object completely call `unset()`, or assign `null`.
>
> This method does not deallocate or detach any of the events that are currently associated with the `EventBase` object, or close any of their sockets - beware.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `EventBase::__construct()`
