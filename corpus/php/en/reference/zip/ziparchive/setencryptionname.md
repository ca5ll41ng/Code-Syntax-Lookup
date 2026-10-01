---
id: "en-php-function-ziparchive-setencryptionname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setEncryptionName"
title: "Set the encryption method of an entry defined by its name"
signature: "public bool ZipArchive::setEncryptionName(string $name, int $method, string|null $password = null)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setencryptionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the encryption method of an entry defined by its name

## Description

```php
public bool ZipArchive::setEncryptionName(string $name, int $method, string|null $password = null)
```

Set the encryption method of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
- **`$method`** — The encryption method defined by one of the ZipArchive::EM_ constants.
- **`$password`** — Optional password, default used when missing.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$password` is now nullable. |

## Examples

This example creates a ZIP file archive `test.zip` and add the file `test.txt` encrypted using the AES 256 method.

**Archive and encrypt a file**

```php


<?php
$zip = new ZipArchive();
if ($zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->setPassword('secret');
    $zip->addFile('text.txt');
    $zip->setEncryptionName('text.txt', ZipArchive::EM_AES_256);
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>

     
```

## Notes

> This function is only available if built against libzip ≥ 1.2.0.

## See Also

`ZipArchive::setPassword()` `ZipArchive::setEncryptionIndex()`
