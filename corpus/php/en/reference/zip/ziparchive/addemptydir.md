---
id: "en-php-function-ziparchive-addemptydir"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::addEmptyDir"
title: "Add a new directory"
signature: "public bool ZipArchive::addEmptyDir(string $dirname, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.addemptydir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a new directory

## Description

```php
public bool ZipArchive::addEmptyDir(string $dirname, int $flags = 0)
```

Adds an empty directory in the archive.

## Parameters

- **`$dirname`** — The directory to add.
- **`$flags`** — Bitmask consisting of `ZipArchive::FL_ENC_GUESS`, `ZipArchive::FL_ENC_UTF_8`, `ZipArchive::FL_ENC_CP437`. The behaviour of these constants is described on the ZIP constants page.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL zip 1.18.0 | `$flags` was added. |

## Examples

**Create a new directory in an archive**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    if($zip->addEmptyDir('newDirectory')) {
        echo 'Created a new root directory';
    } else {
        echo 'Could not create the directory';
    }
    $zip->close();
} else {
    echo 'failed';
}
?>

   
```
