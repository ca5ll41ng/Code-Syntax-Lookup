---
id: "en-php-function-ziparchive-getfromindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getFromIndex"
title: "Returns the entry contents using its index"
signature: "public string|false ZipArchive::getFromIndex(int $index, int $len = 0, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getfromindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the entry contents using its index

## Description

```php
public string|false ZipArchive::getFromIndex(int $index, int $len = 0, int $flags = 0)
```

Returns the entry contents using its index.

## Parameters

- **`$index`** — Index of the entry
- **`$len`** — The length to be read from the entry. If `0`, then the entire entry is read.
- **`$flags`** — The flags to use to open the archive. the following values may be ORed to it. - `ZipArchive::FL_UNCHANGED` - `ZipArchive::FL_COMPRESSED`

## Return Values

Returns the contents of the entry on success or `false` on failure.

## Examples

**Get the file contents**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    echo $zip->getFromIndex(2);
    $zip->close();
} else {
    echo 'failed';
}
?>

     
```

## See Also

`ZipArchive::getFromName()`
