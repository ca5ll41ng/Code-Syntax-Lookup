---
id: "en-php-function-zmqsocket-unbind"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::unbind"
title: "Unbind the socket"
signature: "public ZMQSocket ZMQSocket::unbind(string $dsn)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.unbind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unbind the socket

## Description

```php
public ZMQSocket ZMQSocket::unbind(string $dsn)
```

Unbind the socket from an endpoint. The endpoint is defined in format `transport://address` where transport is one of the following: inproc, ipc, tcp, pgm or epgm.

## Parameters

- **`$dsn`** — The previously bound dsn, for example `transport://address`.

## Return Values

Returns the current object. Throws ZMQSocketException on error.
