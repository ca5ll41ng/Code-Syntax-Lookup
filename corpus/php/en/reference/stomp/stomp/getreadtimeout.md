---
id: "en-php-function-stomp-getreadtimeout"
language: "php"
lang: "en"
category: "function"
name: "Stomp::getReadTimeout"
aliases: ["stomp_get_read_timeout"]
title: "Gets read timeout"
signature: "public array Stomp::getReadTimeout()"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.getreadtimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets read timeout

## Description

Object-oriented style (method):

```php
public array Stomp::getReadTimeout()
```

Procedural style:

```php
array stomp_get_read_timeout(resource $link)
```

Gets read timeout

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.

## Return Values

Returns an array with 2 elements: sec and usec.

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

var_dump($stomp->getReadTimeout());

/* close connection */
unset($stomp);

?>

    
```

The above example will output something similar to:

```text


array(2) {
  ["sec"]=>
  int(2)
  ["usec"]=>
  int(0)
}

   
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

var_dump(stomp_get_read_timeout($link));

/* close connection */
stomp_close($link);

?>

    
```

The above example will output something similar to:

```text


array(2) {
  ["sec"]=>
  int(2)
  ["usec"]=>
  int(0)
}

   
```
