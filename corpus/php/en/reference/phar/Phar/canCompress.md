---
id: "en-php-function-phar-cancompress"
language: "php"
lang: "en"
category: "function"
name: "Phar::canCompress"
title: "Returns whether phar extension supports compression using either zlib or bzip2"
signature: "final public static bool Phar::canCompress(int $compression = 0)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.cancompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether phar extension supports compression using either zlib or bzip2

## Description

```php
final public static bool Phar::canCompress(int $compression = 0)
```

This should be used to test whether compression is possible prior to loading a phar archive containing compressed files.

## Parameters

- **`$compression`** — Either `Phar::GZ` or `Phar::BZ2` can be used to test whether compression is possible with a specific compression algorithm (zlib or bzip2).

## Return Values

`true` if compression/decompression is available, `false` if not.

## Examples

**A `Phar::canCompress()` example**

```php


<?php
if (Phar::canCompress()) {
    echo file_get_contents('phar://compressedphar.phar/internal/file.txt');
} else {
    echo 'no compression available';
}
?>

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `Phar::isCompressed()` `Phar::compressFiles()` `Phar::decompressFiles()` `Phar::getSupportedCompression()` `Phar::convertToExecutable()` `Phar::convertToData()`
