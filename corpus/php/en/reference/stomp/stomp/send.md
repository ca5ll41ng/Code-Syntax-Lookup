---
id: "en-php-function-stomp-send"
language: "php"
lang: "en"
category: "function"
name: "Stomp::send"
aliases: ["stomp_send"]
title: "Sends a message"
signature: "public bool Stomp::send(string $destination, mixed $msg, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a message

## Description

Object-oriented style (method):

```php
public bool Stomp::send(string $destination, mixed $msg, [array $headers = ...])
```

Procedural style:

```php
bool stomp_send(resource $link, string $destination, mixed $msg, [array $headers = ...])
```

Sends a message to the Message Broker.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$destination`** — Where to send the message
- **`$msg`** — Message to send.
- **`$headers`** — Associative array containing the additional headers (example: receipt).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

See `stomp_ack()`.

## Notes

> A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
