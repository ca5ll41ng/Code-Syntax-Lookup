---
id: "en-php-function-zmqsocket-recvmulti"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::recvMulti"
title: "Receives a multipart message"
signature: "public array ZMQSocket::recvMulti(int $mode = 0)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.recvmulti.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Receives a multipart message

## Description

```php
public array ZMQSocket::recvMulti(int $mode = 0)
```

Receive an array multipart message from a socket. By default receiving will block until a message is available unless `ZMQ::MODE_NOBLOCK` flag is used.

## Parameters

- **`$mode`** — Pass mode flags to receive multipart messages or non-blocking operation. See `ZMQ::MODE_{*}` constants.

## Return Values

Returns the array of message parts. Throws ZMQSocketException in error. If `ZMQ::MODE_NOBLOCK` is used and the operation would block `boolean` false shall be returned.
