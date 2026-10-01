---
id: "en-php-function-ziparchive-isencryptionmethoddupported"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::isEncryptionMethodSupported"
title: "Check if a encryption method is supported by libzip"
signature: "public static bool ZipArchive::isEncryptionMethodSupported(int $method, bool $enc = true)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.isencryptionmethoddupported.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a encryption method is supported by libzip

## Description

```php
public static bool ZipArchive::isEncryptionMethodSupported(int $method, bool $enc = true)
```

Check if a compression method is supported by libzip.

## Parameters

- **`$method`** — The encryption method, one of the `ZipArchive::EM_{*}` constants.
- **`$enc`** — If `true` check for encryption, else check for decryption.

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> This function is only available if built against libzip ≥ 1.7.0.

## See Also

`ZipArchive::setEncryptionIndex()` `ZipArchive::setEncryptionName()`
