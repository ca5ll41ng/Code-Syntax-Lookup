---
id: "en-php-function-zmqcontext-getsocket"
language: "php"
lang: "en"
category: "function"
name: "ZMQContext::getSocket"
title: "Create a new socket"
signature: "public ZMQSocket ZMQContext::getSocket(int $type, string $persistent_id = null, callable $on_new_socket = null)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqcontext.getsocket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new socket

## Description

```php
public ZMQSocket ZMQContext::getSocket(int $type, string $persistent_id = null, callable $on_new_socket = null)
```

Shortcut for creating new sockets from the context. If the context is not persistent the `$persistent_id` parameter is ignored and the socket falls back to being non-persistent. The `$on_new_socket` is called only when a new underlying socket structure is created.

## Parameters

- **`$type`** — `ZMQ::SOCKET_{*}` constant to specify socket type.
- **`$persistent_id`** — If `$persistent_id` is specified the socket will be persisted over multiple requests.
- **`$on_new_socket`** — Callback function, which is executed when a new socket structure is created. This function does not get invoked if the underlying persistent connection is re-used. The callback takes ZMQSocket and persistent_id as two arguments.

## Return Values

Returns a `ZMQSocket` object.

## Errors/Exceptions

Throws `ZMQSocketException` on error.

## Examples

**A `ZMQContext()` example**

Basic usage

```php


<?php
/* Allocate a new context */
$context = new ZMQContext();

/* Create a new socket */
$socket = $context->getSocket(ZMQ::SOCKET_REQ, 'my sock');

/* Connect the socket */
$socket->connect("tcp://example.com:1234");

/* Send a request */
$socket->send("Hello there");

/* Receive back the response */
$message = $socket->recv();
echo "Received message: {$message}\n";
?>

    
```
