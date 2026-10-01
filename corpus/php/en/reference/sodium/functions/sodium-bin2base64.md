---
id: "en-php-function-function-sodium-bin2base64"
language: "php"
lang: "en"
category: "function"
name: "sodium_bin2base64"
title: "Encodes a raw binary string with base64."
signature: "string sodium_bin2base64(string $string, int $id)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-bin2base64.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encodes a raw binary string with base64.

## Description

```php
string sodium_bin2base64(string $string, int $id)
```

Converts a raw binary string into a base64-encoded string. Unlike `base64_encode()`, `sodium_bin2base64()` is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys) and supports multiple character sets.

## Parameters

- **`$string`** — Raw binary string.
- **`$id`**
    `SODIUM_BASE64_VARIANT_ORIGINAL` for standard (`A-Za-z0-9/\+`) Base64 encoding.   `SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING` for standard (`A-Za-z0-9/\+`) Base64 encoding, without `=` padding characters.   `SODIUM_BASE64_VARIANT_URLSAFE` for URL-safe (`A-Za-z0-9\-_`) Base64 encoding.   `SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING` for URL-safe (`A-Za-z0-9\-_`) Base64 encoding, without `=` padding characters.  



## Return Values

Base64-encoded string.
