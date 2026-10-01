---
id: "en-php-guide-event-callbacks"
language: "php"
lang: "en"
category: "guide"
name: "event.callbacks"
title: "Event callbacks"
module: "event"
source_url: "https://www.php.net/manual/en/event.callbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Event callbacks

If a callback is registered for an event, it will be called when the event becomes active. To associate a callback with event one can pass a `callable` to either `Event::__construct()`, or `Event::set()`, or one of the factory methods like `Event::timer()`.

An event callback should match the following prototype:

```php
void callback(mixed $fd = null, [int $what = ...], mixed $arg = null)
```

- **`$fd`** — The file descriptor, stream resource or socket associated with the event. For signal event `$fd` is equal to the signal number.
- **`$what`** — Bit mask of *all* events triggered.
- **`$arg`** — User custom data.

`Event::timer()` expects the callback to match the following prototype:

```php
void callback(mixed $arg = null)
```

- **`$arg`** — User custom data.

`Event::signal()` expects the callback to match the following prototype:

```php
void callback([int $signum = ...], mixed $arg = null)
```

- **`$signum`** — The number of the triggered signal(e.g. `SIGTERM` ).
- **`$arg`** — User custom data.
