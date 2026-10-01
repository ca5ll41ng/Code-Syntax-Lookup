---
id: "en-php-function-phardata-decompress"
language: "php"
lang: "en"
category: "function"
name: "PharData::decompress"
title: "Decompresses the entire Phar archive"
signature: "public PharData|null PharData::decompress(string|null $extension = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.decompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decompresses the entire Phar archive

## Description

```php
public PharData|null PharData::decompress(string|null $extension = null)
```

For tar-based archives, this method decompresses the entire archive.

For Zip-based archives, this method fails with an exception. The zlib extension must be enabled to decompress an archive compressed with gzip compression, and the bzip2 extension must be enabled in order to decompress an archive compressed with bzip2 compression.

In addition, this method automatically renames the file extension of the archive, `.tar` by default. Alternatively, a file extension may be specified with the `$extension` parameter.

## Parameters

- **`$extension`** — For decompressing, the default file extension is `.tar`. Use this parameter to specify another file extension. Be aware that only executable archives can contain `.phar` in their filename.

## Return Values

A `PharData` object is returned on success, or `null` on failure.

## Errors/Exceptions

Throws `BadMethodCallException` if the zlib extension is not available, or the bzip2 extension is not enabled.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$extension` is now nullable. |

## Examples

**A `PharData::decompress()` example**

```php


<?php
$p = new PharData('/path/to/my.tar.gz');
$p->decompress(); // creates /path/to/my.tar
?>

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `PharData::compress()` `Phar::canCompress()` `Phar::isCompressed()` `PharData::compress()` `Phar::getSupportedCompression()` `PharData::compressFiles()` `PharData::decompressFiles()`
