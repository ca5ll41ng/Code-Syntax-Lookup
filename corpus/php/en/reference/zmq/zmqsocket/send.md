---
id: "en-php-function-zmqsocket-send"
language: "php"
lang: "en"
category: "function"
name: "ZMQSocket::send"
title: "Sends a message"
signature: "public ZMQSocket ZMQSocket::send(string $message, int $mode = 0)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqsocket.send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a message

## Description

```php
public ZMQSocket ZMQSocket::send(string $message, int $mode = 0)
```

Send a message using the socket. The operation can block unless `ZMQ::MODE_NOBLOCK` is used.

## Parameters

- **`$message`** — The message to send.
- **`$mode`** — Pass mode flags to receive multipart messages or non-blocking operation. See `ZMQ::MODE_{*}` constants.

## Return Values

Returns the current object. Throws ZMQSocketException on error. If `ZMQ::MODE_NOBLOCK` is used and the operation would block `boolean` false shall be returned.
