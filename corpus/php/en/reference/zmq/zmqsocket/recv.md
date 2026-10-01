---
id: "en-php-function-zmqsocket-recv"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::recv"
title: "Receives a message"
signature: "public string ZMQSocket::recv(int $mode = 0)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.recv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Receives a message

## Description

```php
public string ZMQSocket::recv(int $mode = 0)
```

Receive a message from a socket. By default receiving will block until a message is available unless `ZMQ::MODE_DONTWAIT` flag is used. `ZMQ::SOCKOPT_RCVMORE` socket option can be used for receiving multi-part messages. See `ZMQSocket::setSockOpt()` for more information.

## Parameters

- **`$mode`** — Pass mode flags to receive multipart messages or non-blocking operation. See `ZMQ::MODE_{*}` constants.

## Return Values

Returns the message. If `ZMQ::MODE_DONTWAIT` is used and the operation would block `false` shall be returned.

## Errors/Exceptions

Throws `ZMQSocketException` on error.

## Examples

**A send/recv example**

Non-blocking send / receive

```php


<?php

/* Create new queue object, there needs to be a server at the other end */
$queue = new ZMQSocket(new ZMQContext(), ZMQ::SOCKET_REQ);
$queue->connect("tcp://127.0.0.1:5555");

/* Assign socket 1 to the queue, send and receive */
$retries = 5;
$sending = true;

/* Start a loop */
do {
    try {
        /* Try to send / receive */
        if ($sending) {
            echo "Sending message\n";
            $queue->send("This is a message", ZMQ::MODE_DONTWAIT);
            $sending = false;
        } else {
            echo "Got response: " . $queue->recv(ZMQ::MODE_DONTWAIT) . "\n";
            break;
        }
    } catch (ZMQSocketException $e) {
        /* EAGAIN means that the operation would have blocked, retry */
        if ($e->getCode() === ZMQ::ERR_EAGAIN) {
            echo " - Got EAGAIN, retrying ($retries)\n";
        } else {
            die(" - Error: " . $e->getMessage());
        }
    }
    /* Sleep a bit between operations */
    usleep(5);
} while (--$retries);
?>

    
```

The above example will output something similar to:

```text


Sending message
 - Unable to execute operation, retrying (4)
Got response: This is a message

    
```
