---
id: "en-php-function-event-construct"
language: "php"
lang: "en"
category: "function"
name: "Event::__construct"
title: "Constructs Event object"
signature: "public Event::__construct(EventBase $base, mixed $fd, int $what, callable $cb, mixed $arg = NULL)"
module: "event"
source_url: "https://www.php.net/manual/en/event.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs Event object

## Description

```php
public Event::__construct(EventBase $base, mixed $fd, int $what, callable $cb, mixed $arg = NULL)
```

Constructs Event object.

## Parameters

- **`$base`** — The event base to associate with.
- **`$fd`** — stream resource, socket resource, or numeric file descriptor. For timer events pass `-1`. For signal events pass the signal number, e.g. `SIGHUP`.
- **`$what`** — Event flags. See Event flags.
- **`$cb`** — The event callback. See Event callbacks.
- **`$arg`** — Custom data. If specified, it will be passed to the callback when event triggers.

## See Also

  `Event::signal()`   `Event::timer()`
