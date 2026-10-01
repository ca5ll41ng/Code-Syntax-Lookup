---
id: "en-php-function-function-imap-ping"
language: "php"
lang: "en"
category: "function"
name: "imap_ping"
title: "Check if the IMAP stream is still active"
signature: "bool imap_ping(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if the IMAP stream is still active

## Description

```php
bool imap_ping(IMAP\Connection $imap)
```

`imap_ping()` pings the stream to see if it's still active. It may discover new mail; this is the preferred method for a periodic "new mail check" as well as a "keep alive" for servers which have inactivity timeout.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns `true` if the stream is still alive, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_ping()` Example**

```php


<?php

$imap = imap_open("{imap.example.org}", "mailadmin", "password");

// after some sleeping
if (!imap_ping($imap)) {
    // do some stuff to reconnect
}

?>

    
```
