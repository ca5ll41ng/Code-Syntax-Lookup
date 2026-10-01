---
id: "en-php-function-ziparchive-iscompressionmethoddupported"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::isCompressionMethodSupported"
title: "Check if a compression method is supported by libzip"
signature: "public static bool ZipArchive::isCompressionMethodSupported(int $method, bool $enc = true)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.iscompressionmethoddupported.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a compression method is supported by libzip

## Description

```php
public static bool ZipArchive::isCompressionMethodSupported(int $method, bool $enc = true)
```

Check if a compression method is supported by libzip.

## Parameters

- **`$method`** — The compression method, one of the `ZipArchive::CM_{*}` constants.
- **`$enc`** — If `true` check for compression, else check for decompression.

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> This function is only available if built against libzip ≥ 1.7.0.

## See Also

`ZipArchive::setCompressionIndex()` `ZipArchive::setCompressionName()`
