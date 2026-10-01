---
id: "en-php-function-phardata-decompressfiles"
language: "php"
lang: "en"
category: "function"
name: "PharData::decompressFiles"
title: "Decompresses all files in the current zip archive"
signature: "public true PharData::decompressFiles()"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.decompressfiles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decompresses all files in the current zip archive

## Description

```php
public true PharData::decompressFiles()
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

For tar-based archives, this method throws a `BadMethodCallException`, as compression of individual files within a tar archive is not supported by the file format. Use `PharData::compress()` to compress an entire tar-based archive.

For Zip-based archives, this method decompresses all files in the archive. The zlib or bzip2 extensions must be enabled to take advantage of this feature if any files are compressed using bzip2/zlib compression.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `BadMethodCallException` if the zlib extension is not available, or if any files are compressed using bzip2 compression and the bzip2 extension is not enabled.

## Examples

**A `PharData::decompressFiles()` example**

```php


<?php
$p = new PharData('/path/to/my.zip');
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

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `Phar::canCompress()` `Phar::isCompressed()` `PharData::compressFiles()` `Phar::getSupportedCompression()` `PharData::compress()` `PharData::decompress()`
