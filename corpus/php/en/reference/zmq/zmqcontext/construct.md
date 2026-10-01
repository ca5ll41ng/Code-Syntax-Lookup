---
id: "en-php-function-zmqcontext-construct"
language: "php"
lang: "en"
category: "function"
name: "ZMQContext::__construct"
title: "Construct a new ZMQContext object"
signature: "public ZMQContext::__construct(int $io_threads = 1, bool $is_persistent = true)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqcontext.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new ZMQContext object

## Description

```php
public ZMQContext::__construct(int $io_threads = 1, bool $is_persistent = true)
```

Constructs a new ZMQ context. The context is used to initialize sockets. A persistent context is required to initialize persistent sockets.

## Parameters

- **`$io_threads`** — Number of io-threads in the context.
- **`$is_persistent`** — Whether the context is persistent. Persistent context is stored over multiple requests and is a requirement for persistent sockets.

## Errors/Exceptions

Throws `ZMQContextException` if context initialization fails.

## Examples

**A `ZMQContext()` example**

Construct a new context and allocate request socket from it

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
?>

    
```
