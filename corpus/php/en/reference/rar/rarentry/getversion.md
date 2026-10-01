---
id: "en-php-function-rarentry-getversion"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getVersion"
title: "Get minimum version of RAR program required to unpack the entry"
signature: "public int RarEntry::getVersion()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get minimum version of RAR program required to unpack the entry

## Description

```php
public int RarEntry::getVersion()
```

Returns minimum version of RAR program (e.g. WinRAR) required to unpack the entry. It is encoded as 10 * major version + minor version.

## Parameters

This function has no parameters.

## Return Values

Returns the version or `false` on error.

## Examples

**`RarEntry::getVersion()` example**

```php


<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Rar version required for unpacking: " . $entry->getVersion();

?>

   
```
