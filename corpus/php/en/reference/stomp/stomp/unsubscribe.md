---
id: "en-php-function-stomp-unsubscribe"
language: "php"
lang: "en"
category: "function"
name: "Stomp::unsubscribe"
aliases: ["stomp_unsubscribe"]
title: "Removes an existing subscription"
signature: "public bool Stomp::unsubscribe(string $destination, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.unsubscribe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes an existing subscription

## Description

Object-oriented style (method):

```php
public bool Stomp::unsubscribe(string $destination, [array $headers = ...])
```

Procedural style:

```php
bool stomp_unsubscribe(resource $link, string $destination, [array $headers = ...])
```

Removes an existing subscription.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$destination`** — Subscription to remove.
- **`$headers`** — Associative array containing the additional headers (example: receipt).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

See `stomp_ack()`.

## Notes

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
