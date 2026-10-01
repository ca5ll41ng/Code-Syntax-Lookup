---
id: "en-php-function-rarentry-getpackedsize"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getPackedSize"
title: "Get packed size of the entry"
signature: "public int RarEntry::getPackedSize()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getpackedsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get packed size of the entry

## Description

```php
public int RarEntry::getPackedSize()
```

Get packed size of the archive entry.

> Note that on platforms with 32-bit longs (that includes Windows x64), the maximum size returned is capped at 2 GiB. Check the constant `PHP_INT_MAX`.

## Parameters

This function has no parameters.

## Return Values

Returns the packed size, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| PECL rar 2.0.0 | This method now returns correct values of packed sizes bigger than 2 GiB on platforms with 64-bit `int`s and never returns negative values on other platforms. |

## Examples

**`RarEntry::getPackedSize()` example**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Packed size of " . $entry->getName() . " = " . $entry->getPackedSize() . " bytes";

?>

   
```
