---
id: "en-php-function-evloop-now"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::now"
title: "Returns the current \"event loop time\""
signature: "public float EvLoop::now()"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.now.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current "event loop time"

## Description

```php
public float EvLoop::now()
```

Returns the current "event loop time", which is the time the event loop received events and started processing them. This timestamp does not change as long as callbacks are being processed, and this is also the base time used for relative timers. You can treat it as the timestamp of the event occurring(or more correctly, libev finding out about it).

## Parameters

This function has no parameters.

## Return Values

Returns time of the event loop in (fractional) seconds.

## See Also

  `Ev::now()`
