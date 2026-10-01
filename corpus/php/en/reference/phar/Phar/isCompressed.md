---
id: "en-php-function-phar-iscompressed"
language: "php"
lang: "en"
category: "function"
name: "Phar::isCompressed"
title: "Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)"
signature: "public int|false Phar::isCompressed()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.iscompressed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on)

## Description

```php
public int|false Phar::isCompressed()
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Returns Phar::GZ or PHAR::BZ2 if the entire phar archive is compressed (.tar.gz/tar.bz and so on). Zip-based phar archives cannot be compressed as a file, and so this method will always return `false` if a zip-based phar archive is queried.

## Parameters

No parameters.

## Return Values

`Phar::GZ`, `Phar::BZ2` or `false`.

## Examples

**A `Phar::isCompressed()` example**

```php


<?php
try {
    $phar1 = new Phar('myphar.zip.phar');
    var_dump($phar1->isCompressed());
    $phar2 = new Phar('myuncompressed.tar.phar');
    var_dump($phar2->isCompressed());
    $phar2->compress(Phar::GZ);
    var_dump($phar2->isCompressed() == Phar::GZ);
} catch (Exception $e) {
}
?>

    
```

The above example will output:

```text


bool(false)
bool(false)
bool(true)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::decompress()` `PharFileInfo::compress()` `Phar::decompress()` `Phar::compress()` `Phar::canCompress()` `Phar::compressFiles()` `Phar::decompressFiles()` `Phar::getSupportedCompression()`
