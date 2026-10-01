---
id: "en-php-function-phar-decompress"
language: "php"
lang: "en"
category: "function"
name: "Phar::decompress"
title: "Decompresses the entire Phar archive"
signature: "public Phar|null Phar::decompress(string|null $extension = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.decompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decompresses the entire Phar archive

## Description

```php
public Phar|null Phar::decompress(string|null $extension = null)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

For tar-based and phar-based phar archives, this method decompresses the entire archive.

For Zip-based phar archives, this method fails with an exception. The zlib extension must be enabled to decompress an archive compressed with gzip compression, and the bzip2 extension must be enabled in order to decompress an archive compressed with bzip2 compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

In addition, this method automatically changes the file extension of the archive, `.phar` by default for phar archives, or `.phar.tar` for tar-based phar archives. Alternatively, a file extension may be specified with the second parameter.

## Parameters

- **`$extension`** — For decompressing, the default file extensions are `.phar` and `.phar.tar`. Use this parameter to specify another file extension. Be aware that all executable phar archives must contain `.phar` in their filename.

## Return Values

A `Phar` object is returned on success, and `null` on failure.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, the zlib extension is not available, or the bzip2 extension is not enabled.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$extension` is now nullable. |

## Examples

**A `Phar::decompress()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar.gz');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p3 = $p2->decompress(); // creates /path/to/my.phar
?>

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `PharData::compress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compress()` `Phar::getSupportedCompression()` `Phar::compressFiles()` `Phar::decompressFiles()`
