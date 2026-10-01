---
id: "en-php-function-rarentry-getcrc"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::getCrc"
title: "Get CRC of the entry"
signature: "public string RarEntry::getCrc()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.getcrc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get CRC of the entry

## Description

```php
public string RarEntry::getCrc()
```

Returns an hexadecimal string representation of the CRC of the archive entry.

## Parameters

This function has no parameters.

## Return Values

Returns the CRC of the archive entry or `false` on error.

## Changelog

|  |  |
| --- | --- |
| PECL rar 2.0.0 | This method now returns correct values for multiple volume archives. |
