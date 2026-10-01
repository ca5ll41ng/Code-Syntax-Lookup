---
id: "en-php-function-phardata-addfile"
language: "php"
lang: "en"
category: "function"
name: "PharData::addFile"
title: "Add a file from the filesystem to the tar/zip archive"
signature: "public void PharData::addFile(string $filename, string|null $localName = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.addfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a file from the filesystem to the tar/zip archive

## Description

```php
public void PharData::addFile(string $filename, string|null $localName = null)
```

With this method, any file or URL can be added to the tar/zip archive. If the optional second parameter `localname` is specified, the file will be stored in the archive with that name, otherwise the `file` parameter is used as the path to store within the archive. URLs must have a localname or an exception is thrown. This method is similar to `ZipArchive::addFile()`.

## Parameters

- **`$filename`** — Full or relative path to a file on disk to be added to the phar archive.
- **`$localName`** — Path that the file will be stored in the archive.

## Return Values

no return value, exception is thrown on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$localName` is now nullable. |

## Examples

**A `PharData::addFile()` example**

```php


<?php
try {
    $a = new PharData('/path/to/my.tar');

    $a->addFile('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->getContent();

    $a->addFile('/full/path/to/file', 'my/file.txt');
    $c = $a['my/file.txt']->getContent();

    // demonstrate URL usage
    $a->addFile('http://www.example.com', 'example.html');
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## Notes

> `PharData::addFile()`, `PharData::addFromString()` and `PharData::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `PharData::buildFromDirectory()` or `PharData::buildFromIterator()` should be used instead.

## See Also

`PharData::offsetSet()` `Phar::addFile()` `PharData::addFromString()` `PharData::addEmptyDir()`
