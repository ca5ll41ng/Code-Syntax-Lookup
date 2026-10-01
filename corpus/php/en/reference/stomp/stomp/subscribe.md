---
id: "en-php-function-stomp-subscribe"
language: "php"
lang: "en"
category: "function"
name: "Stomp::subscribe"
aliases: ["stomp_subscribe"]
title: "Registers to listen to a given destination"
signature: "public bool Stomp::subscribe(string $destination, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.subscribe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers to listen to a given destination

## Description

Object-oriented style (method):

```php
public bool Stomp::subscribe(string $destination, [array $headers = ...])
```

Procedural style:

```php
bool stomp_subscribe(resource $link, string $destination, [array $headers = ...])
```

Registers to listen to a given destination.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$destination`** — Destination to subscribe to.
- **`$headers`** — Associative array containing the additional headers (example: receipt).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

See `stomp_ack()`.

## Notes

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
