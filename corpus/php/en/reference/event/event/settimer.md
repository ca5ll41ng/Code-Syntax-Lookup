---
id: "en-php-function-event-settimer"
language: "php"
lang: "en"
category: "function"
name: "Event::setTimer"
title: "Re-configures timer event"
signature: "public bool Event::setTimer(EventBase $base, callable $cb, [mixed $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/event.settimer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Re-configures timer event

## Description

```php
public bool Event::setTimer(EventBase $base, callable $cb, [mixed $arg = ...])
```

Re-configures timer event. Note, this function doesn't invoke obsolete libevent's `event_set`. It calls `event_assign` instead.

## Parameters

- **`$base`** — The event base to associate with.
- **`$cb`** — The timer event callback. See Event callbacks.
- **`$arg`** — Custom data. If specified, it will be passed to the callback when event triggers.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `Event::__construct()`   `Event::timer()`
