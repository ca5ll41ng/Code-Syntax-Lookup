---
id: "en-php-function-ziparchive-setmtimename"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setMtimeName"
title: "Set the modification time of an entry defined by its name"
signature: "public bool ZipArchive::setMtimeName(string $name, int $timestamp, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setmtimename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the modification time of an entry defined by its name

## Description

```php
public bool ZipArchive::setMtimeName(string $name, int $timestamp, int $flags = 0)
```

Set the modification time of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
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
    $zip->setMtimeName('text.txt', mktime(0,0,0,12,25,2019));
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

`ZipArchive::setMtimeIndex()`
