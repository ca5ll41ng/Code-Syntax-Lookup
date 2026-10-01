---
id: "en-php-function-rarentry-tostring"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::__toString"
title: "Get text representation of entry"
signature: "public string RarEntry::__toString()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get text representation of entry

## Description

```php
public string RarEntry::__toString()
```

`RarEntry::__toString()` returns a textual representation for this entry. It includes whether the entry is a file or a directory (symbolic links and other special objects will be treated as files), the UTF-8 name of the entry and its CRC. The form and content of this representation may be changed in the future, so they cannot be relied upon.

## Parameters

This function has no parameters.

## Return Values

A textual representation for the entry.
