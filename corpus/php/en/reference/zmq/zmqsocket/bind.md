---
id: "en-php-function-zmqsocket-bind"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::bind"
title: "Bind the socket"
signature: "public ZMQSocket ZMQSocket::bind(string $dsn, bool $force = false)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind the socket

## Description

```php
public ZMQSocket ZMQSocket::bind(string $dsn, bool $force = false)
```

Bind the socket to an endpoint. The endpoint is defined in format `transport://address` where transport is one of the following: inproc, ipc, tcp, pgm or epgm.

## Parameters

- **`$dsn`** — The bind dsn, for example `transport://address`.
- **`$force`** — Tries to bind even if the socket has already been bound to the given endpoint.

## Return Values

Returns the current object. Throws ZMQSocketException on error.
