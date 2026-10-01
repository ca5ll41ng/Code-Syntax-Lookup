---
id: "en-php-function-ziparchive-setencryptionindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setEncryptionIndex"
title: "Set the encryption method of an entry defined by its index"
signature: "public bool ZipArchive::setEncryptionIndex(int $index, int $method, string|null $password = null)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setencryptionindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the encryption method of an entry defined by its index

## Description

```php
public bool ZipArchive::setEncryptionIndex(int $index, int $method, string|null $password = null)
```

Set the encryption method of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$method`** — The encryption method defined by one of the ZipArchive::EM_ constants.
- **`$password`** — Optional password, default used when missing.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$password` is now nullable. |

## Notes

> This function is only available if built against libzip ≥ 1.2.0.

## See Also

`ZipArchive::setPassword()` `ZipArchive::setEncryptionName()`
