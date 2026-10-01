---
id: "en-php-function-function-sodium-hex2bin"
language: "php"
lang: "en"
category: "function"
name: "sodium_hex2bin"
title: "Decodes a hexadecimally encoded binary string"
signature: "string sodium_hex2bin(string $string, string $ignore = \"\")"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-hex2bin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decodes a hexadecimally encoded binary string

## Description

```php
string sodium_hex2bin(string $string, string $ignore = "")
```

Decodes a hexadecimally encoded binary string.

Like `sodium_bin2hex()`, `sodium_hex2bin()` is resistant to side-channel attacks while `hex2bin()` is not.

## Parameters

- **`$string`** — Hexadecimal representation of data.
- **`$ignore`** — Optional string argument for characters to ignore.

## Return Values

Returns the binary representation of the given `$string` data.
