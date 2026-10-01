---
id: "en-php-function-phardata-offsetset"
language: "php"
lang: "en"
category: "function"
name: "PharData::offsetSet"
title: "Set the contents of a file within the tar/zip to those of an external file or string"
signature: "public void PharData::offsetSet(string $localName, resource|string $value)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the contents of a file within the tar/zip to those of an external file or string

## Description

```php
public void PharData::offsetSet(string $localName, resource|string $value)
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a tar/zip archive using array access brackets. offsetSet is used for modifying an existing file, or adding a new file to a tar/zip archive.

## Parameters

- **`$localName`** — The filename (relative path) to modify in a tar or zip archive.
- **`$value`** — Content of the file.

## Return Values

No return values.

## Errors/Exceptions

Throws `PharException` if there are any problems flushing changes made to the tar/zip archive to disk.

## Examples

**A `PharData::offsetSet()` example**

offsetSet should not be accessed directly, but instead used via array access with the `[]` operator.

```php


<?php
$p = new PharData('/path/to/my.tar');
try {
    // calls offsetSet
    $p['file.txt'] = 'Hi there';
} catch (Exception $e) {
    echo 'Could not modify file.txt:', $e;
}
?>

    
```

## Notes

> `PharData::addFile()`, `PharData::addFromString()` and `PharData::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `PharData::buildFromDirectory()` or `PharData::buildFromIterator()` should be used instead.

## See Also

`Phar::offsetSet()`
