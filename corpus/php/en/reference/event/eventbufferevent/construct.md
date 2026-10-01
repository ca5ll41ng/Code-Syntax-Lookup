---
id: "en-php-function-eventbufferevent-construct"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::__construct"
title: "Constructs EventBufferEvent object"
signature: "public EventBufferEvent::__construct(EventBase $base, mixed $socket = null, int $options = 0, callable $readcb = null, callable $writecb = null, callable $eventcb = null, mixed $arg = null)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EventBufferEvent object

## Description

```php
public EventBufferEvent::__construct(EventBase $base, mixed $socket = null, int $options = 0, callable $readcb = null, callable $writecb = null, callable $eventcb = null, mixed $arg = null)
```

Create a buffer event on a socket, stream or a file descriptor. Passing `null` to `$socket` means that the socket should be created later, e.g. by means of `EventBufferEvent::connect()`.

## Parameters

- **`$base`** — Event base that should be associated with the new buffer event.
- **`$socket`** — May be created as a stream(not necessarily by means of `sockets` extension)
- **`$options`** — One of EventBufferEvent::OPT_* constants, or `0`.
- **`$readcb`** — Read event callback. See About buffer event callbacks.
- **`$writecb`** — Write event callback. See About buffer event callbacks.
- **`$eventcb`** — Status-change event callback. See About buffer event callbacks.
- **`$arg`** — A variable that will be passed to all the callbacks.

## See Also

  `EventBufferEvent::sslFilter()`   `EventBufferEvent::sslSocket()`
