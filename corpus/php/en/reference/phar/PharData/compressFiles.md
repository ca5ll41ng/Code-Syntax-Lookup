---
id: "en-php-function-phardata-compressfiles"
language: "php"
lang: "en"
category: "function"
name: "PharData::compressFiles"
title: "Compresses all files in the current tar/zip archive"
signature: "public void PharData::compressFiles(int $compression)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.compressfiles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compresses all files in the current tar/zip archive

## Description

```php
public void PharData::compressFiles(int $compression)
```

For tar-based archives, this method throws a `BadMethodCallException`, as compression of individual files within a tar archive is not supported by the file format. Use `PharData::compress()` to compress an entire tar-based archive.

For Zip-based archives, this method compresses all files in the archive using the specified compression. The zlib or bzip2 extensions must be enabled to take advantage of this feature. In addition, if any files are already compressed using bzip2/zlib compression, the respective extension must be enabled in order to decompress the files prior to re-compressing.

## Parameters

- **`$compression`** — Compression must be one of `Phar::GZ`, `Phar::BZ2` to add compression, or `Phar::NONE` to remove compression.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, the zlib extension is not available, or if any files are compressed using bzip2 compression and the bzip2 extension is not enabled.

## Examples

**A `PharData::compressFiles()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
$p['myfile.txt'] = 'hi';
$p['myfile2.txt'] = 'hi';
foreach ($p as $file) {
    var_dump($file->getFileName());
    var_dump($file->isCompressed());
    var_dump($file->isCompressed(Phar::BZ2));
    var_dump($file->isCompressed(Phar::GZ));
}
$p->compressFiles(Phar::GZ);
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
bool(false)
bool(false)
bool(false)
string(11) "myfile2.txt"
bool(false)
bool(false)
bool(false)
string(10) "myfile.txt"
int(4096)
bool(false)
bool(true)
string(11) "myfile2.txt"
int(4096)
bool(false)
bool(true)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `PharFileInfo::decompress()` `Phar::canCompress()` `Phar::isCompressed()` `PharData::decompressFiles()` `Phar::getSupportedCompression()` `PharData::compress()` `PharData::decompress()`
