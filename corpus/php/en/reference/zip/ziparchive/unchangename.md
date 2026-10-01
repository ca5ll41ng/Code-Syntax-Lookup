---
id: "en-php-function-ziparchive-unchangename"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::unchangeName"
title: "Revert all changes done to an entry with the given name"
signature: "public bool ZipArchive::unchangeName(string $name)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.unchangename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Revert all changes done to an entry with the given name

## Description

```php
public bool ZipArchive::unchangeName(string $name)
```

Revert all changes done to an entry.

## Parameters

- **`$name`** — Name of the entry.

## Return Values

Returns `true` on success or `false` on failure.
