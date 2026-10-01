---
id: "en-php-function-event-set"
language: "php"
lang: "en"
category: "function"
name: "Event::set"
title: "Re-configures event"
signature: "public bool Event::set(EventBase $base, mixed $fd, [int $what = ...], [callable $cb = ...], [mixed $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/event.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Re-configures event

## Description

```php
public bool Event::set(EventBase $base, mixed $fd, [int $what = ...], [callable $cb = ...], [mixed $arg = ...])
```

Re-configures event. Note, this function doesn't invoke obsolete libevent's event_set. It calls event_assign instead.

## Parameters

- **`$base`** — The event base to associate the event with.
- **`$fd`** — Stream resource, socket resource, or numeric file descriptor. For timer events pass `-1`. For signal events pass the signal number, e.g. `SIGHUP`.
- **`$what`** — See Event flags.
- **`$cb`** — The event callback. See Event callbacks.
- **`$arg`** — Custom data associated with the event. It will be passed to the callback when the event becomes active.

## Return Values

Returns `true` on success or `false` on failure.
