---
id: "en-php-function-function-sodium-bin2hex"
language: "php"
lang: "en"
category: "function"
name: "sodium_bin2hex"
title: "Encode to hexadecimal"
signature: "string sodium_bin2hex(string $string)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-bin2hex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encode to hexadecimal

## Description

```php
string sodium_bin2hex(string $string)
```

Converts a raw binary string into a hex-encoded string. Unlike the standard hex-encoding function, `sodium_bin2hex()` is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys).

## Parameters

- **`$string`** — Raw binary string.

## Return Values

Hex encoded string.
