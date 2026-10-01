---
id: "en-php-function-stomp-commit"
language: "php"
lang: "en"
category: "function"
name: "Stomp::commit"
aliases: ["stomp_commit"]
title: "Commits a transaction in progress"
signature: "public bool Stomp::commit(string $transaction_id, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commits a transaction in progress

## Description

Object-oriented style (method):

```php
public bool Stomp::commit(string $transaction_id, [array $headers = ...])
```

Procedural style:

```php
bool stomp_commit(resource $link, string $transaction_id, [array $headers = ...])
```

Commits a transaction in progress.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$transaction_id`** — The transaction id.
- **`$headers`** — Associative array containing the additional headers (example: receipt).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Object-oriented style**

```php


<?php

/* connection */
try {
    $stomp = new Stomp('tcp://localhost:61613');
} catch(StompException $e) {
    die('Connection failed: ' . $e->getMessage());
}

/* begin a transaction */
$stomp->begin('t1');

/* send a message to the queue */
$stomp->send('/queue/foo', 'bar', array('transaction' => 't1'));

/* commit */
$stomp->commit('t1');

/* close connection */
unset($stomp);

?>

    
```

**Procedural style**

```php


<?php

/* connection */
$link = stomp_connect('tcp://localhost:61613');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* begin a transaction */
stomp_begin($link, 't1');

/* send a message to the queue 'foo' */
stomp_send($link, '/queue/foo', 'bar', array('transaction' => 't1'));

/* commit */
stomp_commit($link, 't1');

/* close connection */
stomp_close($link);

?>

    
```

## Notes

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
