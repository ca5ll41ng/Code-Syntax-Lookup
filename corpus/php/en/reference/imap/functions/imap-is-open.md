---
id: "en-php-function-function-imap-is-open"
language: "php"
lang: "en"
category: "function"
name: "imap_is_open"
title: "Check if the IMAP stream is still valid"
signature: "bool imap_is_open(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-is-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if the IMAP stream is still valid

## Description

```php
bool imap_is_open(IMAP\Connection $imap)
```

Check if the IMAP stream is still valid.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns `true` if the stream is still valid, `false` otherwise.

## Examples

**`imap_is_open()` example**

```php


<?php
$mbox = imap_open("{imap.example.org:143}INBOX", "username", "password") or die(implode(", ", imap_errors()));
imap_is_open($mbox);
// ...
?>

    
```
