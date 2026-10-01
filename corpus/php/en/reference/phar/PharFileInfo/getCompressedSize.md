---
id: "en-php-function-pharfileinfo-getcompressedsize"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::getCompressedSize"
title: "Returns the actual size of the file (with compression) inside the Phar archive"
signature: "public int PharFileInfo::getCompressedSize()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.getcompressedsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the actual size of the file (with compression) inside the Phar archive

## Description

```php
public int PharFileInfo::getCompressedSize()
```

This returns the size of the file within the Phar archive. Uncompressed files will return the same value for getCompressedSize as they will with `filesize()`

## Parameters

This function has no parameters.

## Return Values

The size in bytes of the file within the Phar archive on disk.

## Examples

**A `PharFileInfo::getCompressedSize()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    echo $file->getCompressedSize();
} catch (Exception $e) {
    echo 'Write operations failed on my.phar: ', $e;
}
?>

    
```

The above example will output:

```text


2

    
```

## See Also

`PharFileInfo::isCompressed()` `PharFileInfo::decompress()` `PharFileInfo::compress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compress()` `Phar::decompress()` `Phar::getSupportedCompression()` `Phar::decompressFiles()` `Phar::compressFiles()`
