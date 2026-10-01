---
id: "en-php-function-eventbase-dispatch"
language: "php"
lang: "en"
category: "function"
name: "EventBase::dispatch"
title: "Dispatch pending events"
signature: "public void EventBase::dispatch()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.dispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dispatch pending events

## Description

```php
public void EventBase::dispatch()
```

Wait for events to become active, and run their callbacks. The same as `EventBase::loop()` with no flags set.

>

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBase::loop()`
