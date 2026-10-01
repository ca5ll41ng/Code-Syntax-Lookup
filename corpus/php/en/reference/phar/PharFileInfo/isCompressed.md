---
id: "en-php-function-pharfileinfo-iscompressed"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::isCompressed"
title: "Returns whether the entry is compressed"
signature: "public bool PharFileInfo::isCompressed(int|null $compression = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.iscompressed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the entry is compressed

## Description

```php
public bool PharFileInfo::isCompressed(int|null $compression = null)
```

This returns whether a file is compressed within a Phar archive with either Gzip or Bzip2 compression.

## Parameters

- **`$compression`** — One of `Phar::GZ` or `Phar::BZ2`, defaults to any compression.

## Return Values

`true` if the file is compressed within the Phar archive, `false` if not.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$compression` is now nullable. |

## Examples

**A `PharFileInfo::isCompressed()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $p['myfile2.txt'] = 'hi';
    $p['myfile2.txt']->setCompressedGZ();
    $file = $p['myfile.txt'];
    $file2 = $p['myfile2.txt'];
    var_dump($file->isCompressed());
    var_dump($file2->isCompressed());
} catch (Exception $e) {
    echo 'Create/modify on phar my.phar failed: ', $e;
}
?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`PharFileInfo::getCompressedSize()` `PharFileInfo::decompress()` `PharFileInfo::compress()` `Phar::decompress()` `Phar::compress()` `Phar::canCompress()` `Phar::isCompressed()` `Phar::getSupportedCompression()` `Phar::decompressFiles()` `Phar::compressFiles()`
