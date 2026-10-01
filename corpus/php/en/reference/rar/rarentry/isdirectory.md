---
id: "en-php-function-rarentry-isdirectory"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::isDirectory"
title: "Test whether an entry represents a directory"
signature: "public bool RarEntry::isDirectory()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.isdirectory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test whether an entry represents a directory

## Description

```php
public bool RarEntry::isDirectory()
```

Tests whether the current entry is a directory.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this entry is a directory and `false` otherwise.

## Notes

This function is only available starting with version 2.0.0, but one can also test whether an entry is a directory by checking the entry attributes, like this (only works for files compressed in RAR for Windows or Unix):

```php


<?php
//...
//Open file, get entry and store in variable $e...
//...

$isDirectory = (bool) ((($e->getHostOs() == RAR_HOST_WIN32) && ($e->getAttr() & 0x10)) ||
    (($e->getHostOs() == RAR_HOST_UNIX) && (($e->getAttr() & 0xf000) == 0x4000)));
?>

  
```
