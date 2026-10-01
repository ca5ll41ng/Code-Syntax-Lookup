---
id: "en-php-function-phar-decompressfiles"
language: "php"
lang: "en"
category: "function"
name: "Phar::decompressFiles"
title: "Decompresses all files in the current Phar archive"
signature: "public true Phar::decompressFiles()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.decompressfiles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decompresses all files in the current Phar archive

## Description

```php
public true Phar::decompressFiles()
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

For tar-based phar archives, this method throws a `BadMethodCallException`, as compression of individual files within a tar archive is not supported by the file format. Use `Phar::compress()` to compress an entire tar-based phar archive.

For Zip-based and phar-based phar archives, this method decompresses all files in the Phar archive. The zlib or bzip2 extensions must be enabled to take advantage of this feature if any files are compressed using bzip2/zlib compression. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, the zlib extension is not available, or if any files are compressed using bzip2 compression and the bzip2 extension is not enabled.

## Examples

**A `Phar::decompressFiles()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
$p->compressFiles(Phar::GZ);
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
$p->decompressFiles();
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
?>

    
```

The above example will output:

```text


string(10) "myfile.txt"
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)
string(10) "myfile.txt"
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compressFiles()` `Phar::getSupportedCompression()` `Phar::compress()` `Phar::decompress()`
