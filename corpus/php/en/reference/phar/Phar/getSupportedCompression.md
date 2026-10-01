---
id: "en-php-function-phar-getsupportedcompression"
language: "php"
lang: "en"
category: "function"
name: "Phar::getSupportedCompression"
title: "Return array of supported compression algorithms"
signature: "final public static array Phar::getSupportedCompression()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getsupportedcompression.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return array of supported compression algorithms

## Description

```php
final public static array Phar::getSupportedCompression()
```

## Parameters

No parameters.

## Return Values

Returns an array containing any of `Phar::GZ` or `Phar::BZ2`, depending on the availability of the zlib extension or the bz2 extension.

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `Phar::compress()` `Phar::decompress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compressFiles()` `Phar::decompressFiles()`
