---
id: "en-php-function-stomp-abort"
language: "php"
lang: "en"
category: "function"
name: "Stomp::abort"
aliases: ["stomp_abort"]
title: "Rolls back a transaction in progress"
signature: "public bool Stomp::abort(string $transaction_id, [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.abort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rolls back a transaction in progress

## Description

Object-oriented style (method):

```php
public bool Stomp::abort(string $transaction_id, [array $headers = ...])
```

Procedural style:

```php
bool stomp_abort(resource $link, string $transaction_id, [array $headers = ...])
```

Rolls back a transaction in progress.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$transaction_id`** — The transaction to abort.
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

/* rollback */
$stomp->abort('t1');

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

/* rollback */
stomp_abort($link, 't1');

/* close connection */
stomp_close($link);

?>

    
```

## Notes

> Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.
