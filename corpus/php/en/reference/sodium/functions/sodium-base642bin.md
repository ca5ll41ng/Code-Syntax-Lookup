---
id: "en-php-function-function-sodium-base642bin"
language: "php"
lang: "en"
category: "function"
name: "sodium_base642bin"
title: "Decodes a base64-encoded string into raw binary."
signature: "string sodium_base642bin(string $string, int $id, string $ignore = \"\")"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-base642bin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decodes a base64-encoded string into raw binary.

## Description

```php
string sodium_base642bin(string $string, int $id, string $ignore = "")
```

Converts a base64 encoded string into raw binary. Unlike `base64_decode()`, `sodium_base642bin()` is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys) and supports multiple character sets.

## Parameters

- **`$string`** — `string`; Encoded string.
- **`$id`**
    `SODIUM_BASE64_VARIANT_ORIGINAL` for standard (`A-Za-z0-9/\+`) Base64 encoding.   `SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING` for standard (`A-Za-z0-9/\+`) Base64 encoding, without `=` padding characters.   `SODIUM_BASE64_VARIANT_URLSAFE` for URL-safe (`A-Za-z0-9\-_`) Base64 encoding.   `SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING` for URL-safe (`A-Za-z0-9\-_`) Base64 encoding, without `=` padding characters.  


- **`$ignore`** — Characters to ignore when decoding (e.g. whitespace characters).

## Return Values

Decoded string.
