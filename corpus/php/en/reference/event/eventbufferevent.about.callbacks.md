---
id: "en-php-guide-eventbufferevent-about-callbacks"
language: "php"
lang: "en"
category: "guide"
name: "eventbufferevent.about.callbacks"
title: "About buffer event callbacks"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.about.callbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# About buffer event callbacks

An object of `EventBufferEvent` class represents a *buffer event*. The asynchronous nature of I/O performed by Libevent implies that a socket(or other kind of file descriptor) is not always available. Event invokes corresponding callbacks when the resource becomes available for reading or writing, or when some event occurs(e.g. error, "end of line" etc.).

Read and write callbacks should match the following prototype:

```php
void callback(EventBufferEvent $bev = null, mixed $arg = null)
```

- **`$bev`** — Associated `EventBufferEvent` object.
- **`$arg`** — Custom variable attached to all callbacks via `EventBufferEvent::__construct()`, or `EventBufferEvent::setCallbacks()`.

Event callback should match the following prototype:

```php
void callback(EventBufferEvent $bev = null, int $events = 0, mixed $arg = null)
```

- **`$bev`** — Associated `EventBufferEvent` object.
- **`$events`** — Bit mask of events: `EventBufferEvent::READING`, `EventBufferEvent::WRITING`, `EventBufferEvent::EOL`, `EventBufferEvent::ERROR` and `EventBufferEvent::TIMEOUT`. See EventBufferEvent constants
- **`$arg`** — Custom variable attached to all callbacks via `EventBufferEvent::__construct()`, or `EventBufferEvent::setCallbacks()`.
