---
id: "en-php-function-rarentry-getmethod"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getMethod"
title: "Get pack method of the entry"
signature: "public int RarEntry::getMethod()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get pack method of the entry

## Description

```php
public int RarEntry::getMethod()
```

`RarEntry::getMethod()` returns number of the method used when adding current archive entry.

## Parameters

This function has no parameters.

## Return Values

Returns the method number or `false` on error.

## Examples

**`RarEntry::getMethod()` example**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Method number: " . $entry->getMethod();

?>

   
```
