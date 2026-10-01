---
id: "en-php-function-pharfileinfo-getcrc32"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::getCRC32"
title: "Returns CRC32 code or throws an exception if CRC has not been verified"
signature: "public int PharFileInfo::getCRC32()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.getcrc32.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns CRC32 code or throws an exception if CRC has not been verified

## Description

```php
public int PharFileInfo::getCRC32()
```

This returns the `crc32()` checksum of the file within the Phar archive.

## Parameters

This function has no parameters.

## Return Values

The `crc32()` checksum of the file within the Phar archive.

## Errors/Exceptions

Throws `BadMethodCallException` if the file has not yet had its CRC32 verified. This should be impossible with normal use, as the CRC is verified upon opening the file for reading or writing.

## Examples

**A `PharFileInfo::getCRC32()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    echo $file->getCRC32();
} catch (Exception $e) {
    echo 'Write operations on my.phar.phar failed: ', $e;
}
?>

    
```

The above example will output:

```text


3633523372

    
```
