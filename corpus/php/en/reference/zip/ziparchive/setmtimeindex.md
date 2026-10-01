---
id: "en-php-function-ziparchive-setmtimeindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setMtimeIndex"
title: "Set the modification time of an entry defined by its index"
signature: "public bool ZipArchive::setMtimeIndex(int $index, int $timestamp, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setmtimeindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the modification time of an entry defined by its index

## Description

```php
public bool ZipArchive::setMtimeIndex(int $index, int $timestamp, int $flags = 0)
```

Set the modification time of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$timestamp`** — The modification time (unix timestamp) of the file.
- **`$flags`** — Optional flags, unused for now.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

This example creates a ZIP file archive `test.zip` and add the file `test.txt` with its modification date.

**Archive a file**

```php


<?php
$zip = new ZipArchive();
if ($zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->addFile('text.txt');
    $zip->setMtimeIndex(0, mktime(0,0,0,12,25,2019));
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>

     
```

## Notes

> This function is only available if built against libzip ≥ 1.0.0.

## See Also

`ZipArchive::setMtimeName()`
