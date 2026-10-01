---
id: "en-php-function-ziparchive-renameindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::renameIndex"
title: "Renames an entry defined by its index"
signature: "public bool ZipArchive::renameIndex(int $index, string $new_name)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.renameindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Renames an entry defined by its index

## Description

```php
public bool ZipArchive::renameIndex(int $index, string $new_name)
```

Renames an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry to rename.
- **`$new_name`** — New name.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Rename one entry**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    $zip->renameIndex(2,'newname.txt');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>

     
```
