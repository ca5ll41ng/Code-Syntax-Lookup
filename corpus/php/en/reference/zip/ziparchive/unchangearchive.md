---
id: "en-php-function-ziparchive-unchangearchive"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::unchangeArchive"
title: "Revert all global changes done in the archive"
signature: "public bool ZipArchive::unchangeArchive()"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.unchangearchive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Revert all global changes done in the archive

## Description

```php
public bool ZipArchive::unchangeArchive()
```

Revert all global changes to the archive. For now, this only reverts archive comment changes.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.
