---
id: "en-php-function-phardata-addemptydir"
language: "php"
lang: "en"
category: "function"
name: "PharData::addEmptyDir"
title: "Add an empty directory to the tar/zip archive"
signature: "public void PharData::addEmptyDir(string $directory)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.addemptydir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add an empty directory to the tar/zip archive

## Description

```php
public void PharData::addEmptyDir(string $directory)
```

With this method, an empty directory is created with path `dirname`. This method is similar to `ZipArchive::addEmptyDir()`.

## Parameters

- **`$directory`** — The name of the empty directory to create in the phar archive

## Return Values

no return value, exception is thrown on failure.

## Examples

**A `PharData::addEmptyDir()` example**

```php


<?php
try {
    $a = new PharData('/path/to/my.tar');

    $a->addEmptyDir('/full/path/to/file');
    // demonstrates how this file is stored
    $b = $a['full/path/to/file']->isDir();
} catch (Exception $e) {
    // handle errors here
}
?>

    
```

## See Also

`Phar::addEmptyDir()` `PharData::addFile()` `PharData::addFromString()`
