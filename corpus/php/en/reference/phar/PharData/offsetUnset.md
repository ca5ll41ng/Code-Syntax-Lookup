---
id: "en-php-function-phardata-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "PharData::offsetUnset"
title: "Remove a file from a tar/zip archive"
signature: "public void PharData::offsetUnset(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a file from a tar/zip archive

## Description

```php
public void PharData::offsetUnset(string $localName)
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a tar/zip archive using array access brackets. offsetUnset is used for deleting an existing file, and is called by the `unset()` language construct.

## Parameters

- **`$localName`** — The filename (relative path) to modify in the tar/zip archive.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `PharException` if there are any problems flushing changes made to the tar/zip archive to disk.

## Examples

**A `PharData::offsetUnset()` example**

```php


<?php
$p = new PharData('/path/to/my.zip');
try {
    // deletes file.txt from my.zip by calling offsetUnset
    unset($p['file.txt']);
} catch (Exception $e) {
    echo 'Could not delete file.txt: ', $e;
}
?>

    
```

## See Also

`Phar::offsetUnset()`
