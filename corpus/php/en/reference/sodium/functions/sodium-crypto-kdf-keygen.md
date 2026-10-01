---
id: "en-php-function-function-sodium-crypto-kdf-keygen"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_kdf_keygen"
title: "Generate a random root key for the KDF interface"
signature: "string sodium_crypto_kdf_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-kdf-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a random root key for the KDF interface

## Description

```php
string sodium_crypto_kdf_keygen()
```

Generates a random key suitable for serving as the root key for `sodium_crypto_kdf_derive_from_key()`.

## Parameters

This function has no parameters.

## Return Values

A random 256-bit key.
