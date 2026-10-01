---
id: "en-php-function-ziparchive-renamename"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::renameName"
title: "Renames an entry defined by its name"
signature: "public bool ZipArchive::renameName(string $name, string $new_name)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.renamename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Renames an entry defined by its name

## Description

```php
public bool ZipArchive::renameName(string $name, string $new_name)
```

Renames an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry to rename.
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
    $zip->renameName('currentname.txt','newname.txt');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>

     
```
