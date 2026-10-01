---
id: "en-php-function-zmqsocket-connect"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::connect"
title: "Connect the socket"
signature: "public ZMQSocket ZMQSocket::connect(string $dsn, bool $force = false)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connect the socket

## Description

```php
public ZMQSocket ZMQSocket::connect(string $dsn, bool $force = false)
```

Connect the socket to a remote endpoint. The endpoint is defined in format `transport://address` where transport is one of the following: inproc, ipc, tcp, pgm or epgm.

## Parameters

- **`$dsn`** — The connect dsn, for example `transport://address`.
- **`$force`** — Tries to connect even if the socket has already been connected to given endpoint.

## Return Values

Returns the current object.

## Errors/Exceptions

Throws `ZMQSocketException` on error.

## Examples

**A `ZMQContext()` example**

Construct a new context and allocate request socket from it

```php


<?php
/* Server hostname */
$dsn = "tcp://127.0.0.1:5555";

/* Create a socket */
$socket = new ZMQSocket(new ZMQContext(), ZMQ::SOCKET_REQ, 'my socket');

/* Get list of connected endpoints */
$endpoints = $socket->getEndpoints();

/* Check if the socket is connected */
if (!in_array($dsn, $endpoints['connect'])) {
    echo "<p>Connecting to $dsn</p>";
    $socket->connect($dsn);
} else {
    echo "<p>Already connected to $dsn</p>";
}

/* Send and receive */
$socket->send("Hello!");
$message = $socket->recv();

echo "<p>Server said: {$message}</p>";
?>

    
```
