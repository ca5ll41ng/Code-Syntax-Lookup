---
id: "en-php-function-zmqsocket-getsockopt"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::getSockOpt"
title: "Get socket option"
signature: "public mixed ZMQSocket::getSockOpt(string $key)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.getsockopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get socket option

## Description

```php
public mixed ZMQSocket::getSockOpt(string $key)
```

Returns the value of a socket option.

## Parameters

- **`$key`** — An integer representing the option. See the `ZMQ::SOCKOPT_{*}` constants.

## Return Values

Returns either a `string` or an `integer` depending on `$key`. Throws ZMQSocketException on error.
