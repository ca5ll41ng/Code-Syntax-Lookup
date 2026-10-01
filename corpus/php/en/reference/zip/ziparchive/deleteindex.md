---
id: "en-php-function-ziparchive-deleteindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::deleteIndex"
title: "Delete an entry in the archive using its index"
signature: "public bool ZipArchive::deleteIndex(int $index)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.deleteindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete an entry in the archive using its index

## Description

```php
public bool ZipArchive::deleteIndex(int $index)
```

Delete an entry in the archive using its index.

## Parameters

- **`$index`** — Index of the entry to delete.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Delete file from archive using its index**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->deleteIndex(2);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
