---
id: "en-php-function-phardata-addfromstring"
language: "php"
lang: "en"
category: "function"
name: "PharData::addFromString"
title: "Add a file from a string to the tar/zip archive"
signature: "public void PharData::addFromString(string $localName, string $contents)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.addfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a file from a string to the tar/zip archive

## Description

```php
public void PharData::addFromString(string $localName, string $contents)
```

With this method, any string can be added to the tar/zip archive. The file will be stored in the archive with `localname` as its path. This method is similar to `ZipArchive::addFromString()`.

## Parameters

- **`$localName`** — Path that the file will be stored in the archive.
- **`$contents`** — The file contents to store

## Return Values

no return value, exception is thrown on failure.

## Examples

**A `PharData::addFromString()` example**

```php


<?php
try {
    $a = new PharData('/path/to/my.tar');

    $a->addFromString('path/to/file.txt', 'my simple file');
    $b = $a['path/to/file.txt']->getContent();

    // to add contents from a stream handle for large files, use offsetSet()
    $c = fopen('/path/to/hugefile.bin');
    $a['largefile.bin'] = $c;
    fclose($c);
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## Notes

> `PharData::addFile()`, `PharData::addFromString()` and `PharData::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `PharData::buildFromDirectory()` or `PharData::buildFromIterator()` should be used instead.

## See Also

`PharData::offsetSet()` `Phar::addFromString()` `PharData::addFile()` `PharData::addEmptyDir()`
