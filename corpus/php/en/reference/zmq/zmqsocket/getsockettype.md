---
id: "en-php-function-zmqsocket-getsockettype"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::getSocketType"
title: "Get the socket type"
signature: "public int ZMQSocket::getSocketType()"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.getsockettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the socket type

## Description

```php
public int ZMQSocket::getSocketType()
```

Gets the socket type.

## Parameters

This function has no parameters.

## Return Values

Returns an integer representing the socket type. The integer can be compared against `ZMQ::SOCKET_{*}` constants.
