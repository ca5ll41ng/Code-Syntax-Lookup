---
id: "en-php-function-zmqsocket-setsockopt"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::setSockOpt"
title: "Set a socket option"
signature: "public ZMQSocket ZMQSocket::setSockOpt(int $key, mixed $value)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.setsockopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a socket option

## Description

```php
public ZMQSocket ZMQSocket::setSockOpt(int $key, mixed $value)
```

Sets a ZMQ socket option. The type of the `$value` depends on the `$key`. See ZMQ Constant Types for more information.

## Parameters

- **`$key`** — One of the `ZMQ::SOCKOPT_{*}` constants.
- **`$value`** — The value of the parameter.

## Return Values

Returns the current object. Throws ZMQSocketException on error.
