---
id: "en-php-function-stomp-setreadtimeout"
language: "php"
lang: "en"
category: "function"
name: "Stomp::setReadTimeout"
aliases: ["stomp_set_read_timeout"]
title: "Sets read timeout"
signature: "public void Stomp::setReadTimeout(int $seconds, [int $microseconds = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.setreadtimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets read timeout

## Description

Object-oriented style (method):

```php
public void Stomp::setReadTimeout(int $seconds, [int $microseconds = ...])
```

Procedural style:

```php
void stomp_set_read_timeout(resource $link, int $seconds, [int $microseconds = ...])
```

Sets read timeout.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$seconds`** — The seconds part of the timeout to be set.
- **`$microseconds`** — The microseconds part of the timeout to be set.

## Return Values

No value is returned.

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

$stomp->setReadTimeout(10);

/* close connection */
unset($stomp);

?>

    
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

stomp_set_read_timeout($link, 10);

/* close connection */
stomp_close($link);

?>

    
```
