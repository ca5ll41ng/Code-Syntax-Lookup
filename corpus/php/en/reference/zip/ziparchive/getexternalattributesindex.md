---
id: "en-php-function-ziparchive-getexternalattributesindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getExternalAttributesIndex"
title: "Retrieve the external attributes of an entry defined by its index"
signature: "public bool ZipArchive::getExternalAttributesIndex(int $index, int $opsys, int $attr, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getexternalattributesindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the external attributes of an entry defined by its index

## Description

```php
public bool ZipArchive::getExternalAttributesIndex(int $index, int $opsys, int $attr, int $flags = 0)
```

Retrieve the external attributes of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$opsys`** — On success, receive the operating system code defined by one of the ZipArchive::OPSYS_ constants.
- **`$attr`** — On success, receive the external attributes. Value depends on operating system.
- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged attributes are returned.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

This example extract all the entries of a ZIP archive `test.zip` and set the Unix rights from external attributes.

**Extract all entries with Unix rights**

```php


<?php
$zip = new ZipArchive();
if ($zip->open('test.zip') === TRUE) {
    for ($idx=0 ; $s = $zip->statIndex($idx) ; $idx++) {
        if ($zip->extractTo('.', $s['name'])) {
            if ($zip->getExternalAttributesIndex($idx, $opsys, $attr) 
                && $opsys==ZipArchive::OPSYS_UNIX) {
               chmod($s['name'], ($attr >> 16) & 0777);
            }
        }
    }
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>

     
```
