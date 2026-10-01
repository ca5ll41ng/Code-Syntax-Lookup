---
id: "en-php-function-eventbufferevent-sslsocket"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslSocket"
title: "Creates a new SSL buffer event to send its data over an SSL on a socket"
signature: "public static EventBufferEvent EventBufferEvent::sslSocket(EventBase $base, mixed $socket, EventSslContext $ctx, int $state, [int $options = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslsocket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new SSL buffer event to send its data over an SSL on a socket

## Description

```php
public static EventBufferEvent EventBufferEvent::sslSocket(EventBase $base, mixed $socket, EventSslContext $ctx, int $state, [int $options = ...])
```

Creates a new SSL buffer event to send its data over an SSL on a socket.

## Parameters

- **`$base`** — Associated event base.
- **`$socket`** — Socket to use for this SSL. Can be stream or socket resource, numeric file descriptor, or `null`. If `$socket` is `null`, it is assumed that the file descriptor for the socket will be assigned later, for instance, by means of `EventBufferEvent::connectHost()` method.
- **`$ctx`** — Object of `EventSslContext` class.
- **`$state`** — The current state of SSL connection: `EventBufferEvent::SSL_OPEN`, `EventBufferEvent::SSL_ACCEPTING` or `EventBufferEvent::SSL_CONNECTING`.
- **`$options`** — The buffer event options.

## Return Values

Returns `EventBufferEvent` object.

## See Also

  `EventBufferEvent::sslFilter()`
