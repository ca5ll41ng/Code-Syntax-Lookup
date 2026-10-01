---
id: "en-php-function-event-free"
language: "php"
lang: "en"
category: "function"
name: "Event::free"
title: "Make event non-pending and free resources allocated for this event"
signature: "public void Event::free()"
module: "event"
source_url: "https://www.php.net/manual/en/event.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make event non-pending and free resources allocated for this event

## Description

```php
public void Event::free()
```

Removes event from the list of events monitored by libevent, and free resources allocated for the event.

> The `Event::free()` method currently doesn't destruct the object itself. To destruct the object completely call `unset()`, or assign `null`.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `Event::__construct()`
