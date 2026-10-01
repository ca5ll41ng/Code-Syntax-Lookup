---
id: "en-php-function-pharfileinfo-decompress"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::decompress"
title: "Decompresses the current Phar entry within the phar"
signature: "public true PharFileInfo::decompress()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.decompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decompresses the current Phar entry within the phar

## Description

```php
public true PharFileInfo::decompress()
```

This method decompresses the file inside the Phar archive. Depending on how the file is compressed, the bzip2 or zlib extensions must be enabled to take advantage of this feature. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a `Phar` archive. Files within `PharData` archives do not have this restriction.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `BadMethodCallException` if the phar.readonly INI variable is on, or if the bzip2/zlib extension is not available.

## Examples

**A `PharFileInfo::decompress()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    $file->compress(Phar::GZ);
    var_dump($file->isCompressed());
    $p['myfile.txt']->decompress();
    var_dump($file->isCompressed());
} catch (Exception $e) {
    echo 'Create/modify failed for my.phar: ', $e;
}
?>

    
```

The above example will output:

```text


int(4096)
bool(false)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::isCompressed()` `PharFileInfo::compress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::compressFiles()` `Phar::decompressFiles()` `Phar::compress()` `Phar::decompress()` `Phar::getSupportedCompression()`
