---
id: "en-php-function-zmqsocket-disconnect"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::disconnect"
title: "Disconnect a socket"
signature: "public ZMQSocket ZMQSocket::disconnect(string $dsn)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.disconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disconnect a socket

## Description

```php
public ZMQSocket ZMQSocket::disconnect(string $dsn)
```

Disconnect the socket from a previously connected remote endpoint. The endpoint is defined in format `transport://address` where transport is one of the following: inproc, ipc, tcp, pgm or epgm.

## Parameters

- **`$dsn`** — The connect dsn, for example `transport://address`.

## Return Values

Returns the current object. Throws ZMQSocketException on error.
