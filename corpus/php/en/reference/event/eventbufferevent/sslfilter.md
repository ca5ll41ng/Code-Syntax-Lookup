---
id: "en-php-function-eventbufferevent-sslfilter"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslFilter"
title: "Create a new SSL buffer event to send its data over another buffer event"
signature: "public static EventBufferEvent EventBufferEvent::sslFilter(EventBase $base, EventBufferEvent $underlying, EventSslContext $ctx, int $state, int $options = 0)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslfilter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new SSL buffer event to send its data over another buffer event

## Description

```php
public static EventBufferEvent EventBufferEvent::sslFilter(EventBase $base, EventBufferEvent $underlying, EventSslContext $ctx, int $state, int $options = 0)
```

Create a new SSL buffer event to send its data over another buffer event

> This function is available only if `Event` is compiled with OpenSSL support.

## Parameters

- **`$base`** — Associated event base.
- **`$underlying`** — A socket buffer event to use for this SSL.
- **`$ctx`** — Object of `EventSslContext` class.
- **`$state`** — The current state of SSL connection: `EventBufferEvent::SSL_OPEN`, `EventBufferEvent::SSL_ACCEPTING` or `EventBufferEvent::SSL_CONNECTING`.
- **`$options`** — One or more buffer event options.

## Return Values

Returns a new SSL `EventBufferEvent` object.

## Examples

**示例**



## See Also

  `EventBufferEvent::sslSocket()`
