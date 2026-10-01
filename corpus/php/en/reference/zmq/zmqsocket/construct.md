---
id: "en-php-function-zmqsocket-construct"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::__construct"
title: "Construct a new ZMQSocket"
signature: "public ZMQSocket::__construct(ZMQContext $context, int $type, string $persistent_id = null, callable $on_new_socket = null)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new ZMQSocket

## Description

```php
public ZMQSocket::__construct(ZMQContext $context, int $type, string $persistent_id = null, callable $on_new_socket = null)
```

Constructs a ZMQSocket object. `$persistent_id` parameter can be used to allocated a persistent socket. A persistent socket has to be allocated from a persistent context and it stays connected over multiple requests. The `$persistent_id` parameter can be used to recall the same socket over multiple requests. The `$on_new_socket` is called only when a new underlying socket structure is created.

## Parameters

- **`$context`** — ZMQContext object.
- **`$type`** — The socket type. See `ZMQ::SOCKET_{*}` constants.
- **`$persistent_id`** — If `$persistent_id` is specified the socket will be persisted over multiple requests. If `$context` is not persistent the socket falls back to non-persistent mode.
- **`$on_new_socket`** — Callback function, which is executed when a new socket structure is created. This function does not get invoked if the underlying persistent connection is re-used.
  ```php
  {callback}(ZMQSocket $socket, string $persistent_id = null)
  ```



## Errors/Exceptions

Throws `ZMQSocketException` on error.

## Examples

**A `ZMQSocket()` example**

Using callback the bind/connect socket

```php


<?php

/*
  The socket is persistent so this function is called only on the 
  first request to the script.
*/
function on_new_socket_cb(ZMQSocket $socket, $persistent_id = null)
{
    if ($persistent_id === 'server') {
        $socket->bind("tcp://localhost:12122");
    } else {
        $socket->connect("tcp://localhost:12122");
    }
}

/* Allocate a new context */
$context = new ZMQContext();

/* Create a new socket */
$socket = $context->getSocket(ZMQ::SOCKET_REP, 'server', 'on_new_socket_cb');

$message = $socket->recv();
echo "Received message: {$message}\n";
?>

    
```
