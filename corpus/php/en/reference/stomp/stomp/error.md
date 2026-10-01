---
id: "en-php-function-stomp-error"
language: "php"
lang: "en"
category: "function"
name: "Stomp::error"
aliases: ["stomp_error"]
title: "Gets the last stomp error"
signature: "public string Stomp::error()"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the last stomp error

## Description

Object-oriented style (method):

```php
public string Stomp::error()
```

Procedural style:

```php
string stomp_error(resource $link)
```

Gets the last stomp error.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.

## Return Values

Returns an error string or `false` if no error occurred.

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

var_dump($stomp->error());

if (!$stomp->abort('unknown-transaction', array('receipt' => 'foo'))) {
    var_dump($stomp->error());
}

/* close connection */
unset($stomp);

?>

    
```

The above example will output something similar to:

```text


bool(false)
string(43) "Invalid transaction id: unknown-transaction"

    
```

**Procedural style**

```php


<?php

/* connection */
$link = stomp_connect('ssl://localhost:61612');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

var_dump(stomp_error($link));

if (!stomp_abort($link, 'unknown-transaction', array('receipt' => 'foo'))) {
    var_dump(stomp_error($link));
}

/* close connection */
stomp_close($link);

?>

    
```

The above example will output something similar to:

```text


bool(false)
string(43) "Invalid transaction id: unknown-transaction"

    
```
