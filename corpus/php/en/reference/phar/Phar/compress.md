---
id: "en-php-function-phar-compress"
language: "php"
lang: "en"
category: "function"
name: "Phar::compress"
title: "Compresses the entire Phar archive using Gzip or Bzip2 compression"
signature: "public Phar|null Phar::compress(int $compression, string|null $extension = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.compress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compresses the entire Phar archive using Gzip or Bzip2 compression

## Description

```php
public Phar|null Phar::compress(int $compression, string|null $extension = null)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

For tar-based and phar-based phar archives, this method compresses the entire archive using gzip compression or bzip2 compression. The resulting file can be processed with the gunzip command/bunzip command, or accessed directly and transparently with the Phar extension.

For Zip-based phar archives, this method fails with an exception. The zlib extension must be enabled to compress with gzip compression, the bzip2 extension must be enabled in order to compress with bzip2 compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

In addition, this method automatically renames the archive, appending `.gz`, `.bz2` or removing the extension if passed `Phar::NONE` to remove compression. Alternatively, a file extension may be specified with the second parameter.

## Parameters

- **`$compression`** — Compression must be one of `Phar::GZ`, `Phar::BZ2` to add compression, or `Phar::NONE` to remove compression.
- **`$extension`** — By default, the extension is `.phar.gz` or `.phar.bz2` for compressing phar archives, and `.phar.tar.gz` or `.phar.tar.bz2` for compressing tar archives. For decompressing, the default file extensions are `.phar` and `.phar.tar`.

## Return Values

Returns a `Phar` object, or `null` on failure.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, the zlib extension is not available, or the bzip2 extension is not enabled.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$extension` is now nullable. |

## Examples

**A `Phar::compress()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p1 = $p->compress(Phar::GZ); // copies to /path/to/my.phar.gz
$p2 = $p->compress(Phar::BZ2); // copies to /path/to/my.phar.bz2
$p3 = $p2->compress(Phar::NONE); // exception: /path/to/my.phar already exists
?>

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `PharData::compress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::decompress()` `Phar::getSupportedCompression()` `Phar::compressFiles()` `Phar::decompressFiles()`
