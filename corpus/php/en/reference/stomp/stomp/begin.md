---
id: "en-php-function-stomp-begin"
language: "php"
lang: "en"
category: "function"
name: "Stomp::begin"
aliases: ["stomp_begin"]
title: "Starts a transaction"
signature: "public bool Stomp::begin(string $transaction_id, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.begin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Starts a transaction

## Description

Object-oriented style (method):

```php
public bool Stomp::begin(string $transaction_id, [array $headers = ...])
```

Procedural style:

```php
bool stomp_begin(resource $link, string $transaction_id, [array $headers = ...])
```

Starts a transaction.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$transaction_id`** — The transaction id.
- **`$headers`** — Associative array containing the additional headers (example: receipt).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

See `stomp_commit()` or `stomp_abort()`.

## Notes

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
