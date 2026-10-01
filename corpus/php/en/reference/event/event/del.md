---
id: "en-php-function-event-del"
language: "php"
lang: "en"
category: "function"
name: "Event::del"
title: "Makes event non-pending"
signature: "public bool Event::del()"
module: "event"
source_url: "https://www.php.net/manual/en/event.del.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Makes event non-pending

## Description

```php
public bool Event::del()
```

Removes an event from the set of monitored events, i.e. makes it non-pending.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `Event::add()`
