---
id: "en-php-function-ziparchive-getnameindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getNameIndex"
title: "Returns the name of an entry using its index"
signature: "public string|false ZipArchive::getNameIndex(int $index, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getnameindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the name of an entry using its index

## Description

```php
public string|false ZipArchive::getNameIndex(int $index, int $flags = 0)
```

Returns the name of an entry using its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged name is returned.

## Return Values

Returns the name on success or `false` on failure.

## Examples

**`ZipArchive::getNameIndex()` example**

```php


<?php
if ($zip->open('test.zip') == TRUE) {
 for ($i = 0; $i < $zip->numFiles; $i++) {
     $filename = $zip->getNameIndex($i);
     // ...
 }
}
?>

    
```
