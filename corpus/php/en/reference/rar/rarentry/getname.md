---
id: "en-php-function-rarentry-getname"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getName"
title: "Get name of the entry"
signature: "public string RarEntry::getName()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get name of the entry

## Description

```php
public string RarEntry::getName()
```

Returns the name (with path) of the archive entry.

## Parameters

This function has no parameters.

## Return Values

Returns the entry name as a string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| PECL rar 2.0.0 | As of version 2.0.0, the returned string is encoded in Unicode/UTF-8. |

## Examples

**`RarEntry::getName()` example**

```php


<?php

//this example is safe even in pages not encoded in UTF-8
//for those encoded in UTF-8, the call to mb_convert_encoding is unnecessary

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Entry name: " . mb_convert_encoding(
    htmlentities(
        $entry->getName(),
        ENT_COMPAT,
        "UTF-8"
    ),
    "HTML-ENTITIES",
    "UTF-8"
);

?>

   
```
