---
id: "en-php-function-pharfileinfo-compress"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::compress"
title: "Compresses the current Phar entry with either zlib or bzip2 compression"
signature: "public true PharFileInfo::compress(int $compression)"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.compress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compresses the current Phar entry with either zlib or bzip2 compression

## Description

```php
public true PharFileInfo::compress(int $compression)
```

This method compresses the file inside the Phar archive using either bzip2 compression or zlib compression. The bzip2 or zlib extension must be enabled to take advantage of this feature. In addition, if the file is already compressed, the respective extension must be enabled in order to decompress the file. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a `Phar` archive. Files within `PharData` archives do not have this restriction.

## Parameters

- **`$compression`** — Compression must be `Phar::GZ` or `Phar::BZ2`.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, or if the bzip2/zlib extension is not available.

## Examples

**A `PharFileInfo::compress()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->isCompressed(Phar::BZ2));
    $p['myfile.txt']->compress(Phar::BZ2);
    var_dump($file->isCompressed(Phar::BZ2));
} catch (Exception $e) {
    echo 'Create/modify operations on my.phar failed: ', $e;
}
?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::decompress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compressFiles()` `Phar::decompressFiles()` `Phar::compress()` `Phar::decompress()` `Phar::getSupportedCompression()`
