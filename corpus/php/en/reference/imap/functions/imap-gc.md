---
id: "en-php-function-function-imap-gc"
language: "php"
lang: "en"
category: "function"
name: "imap_gc"
title: "Clears IMAP cache"
signature: "true imap_gc(IMAP\\Connection $imap, int $flags)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-gc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clears IMAP cache

## Description

```php
true imap_gc(IMAP\Connection $imap, int $flags)
```

Purges the cache of entries of a specific type.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$flags`** — Specifies the cache to purge. It may one or a combination of the following constants: `IMAP_GC_ELT` (message cache elements), `IMAP_GC_ENV` (envelope and bodies), `IMAP_GC_TEXTS` (texts).

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$flags` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | A `ValueError` is now thrown on invalid `$flags` parameter values. Previously, a warning was emitted and the function returned `false`. |

## Examples

**`imap_gc()` example**

```php


<?php

$mbox = imap_open("{imap.example.org:143}", "username", "password");

imap_gc($mbox, IMAP_GC_ELT);

?>

    
```
