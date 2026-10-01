---
id: "en-php-function-ziparchive-setexternalattributesname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setExternalAttributesName"
title: "Set the external attributes of an entry defined by its name"
signature: "public bool ZipArchive::setExternalAttributesName(string $name, int $opsys, int $attr, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setexternalattributesname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the external attributes of an entry defined by its name

## Description

```php
public bool ZipArchive::setExternalAttributesName(string $name, int $opsys, int $attr, int $flags = 0)
```

Set the external attributes of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
- **`$opsys`** — The operating system code defined by one of the ZipArchive::OPSYS_ constants.
- **`$attr`** — The external attributes. Value depends on operating system.
- **`$flags`** — Optional flags. Currently unused.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

This example opens a ZIP file archive `test.zip` and add the file `test.txt` with its Unix rights as external attributes.

**Archive a file, with its Unix rights**

```php


<?php
$zip = new ZipArchive();
$stat = stat($filename='test.txt');
if (is_array($stat) && $zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->addFile($filename);
    $zip->setExternalAttributesName($filename, ZipArchive::OPSYS_UNIX, $stat['mode'] << 16);
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>

     
```
