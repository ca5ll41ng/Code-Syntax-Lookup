---
id: "en-php-function-function-sodium-crypto-aead-aegis256-keygen"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_aegis256_keygen"
title: "Generate a random AEGIS-256 key"
signature: "string sodium_crypto_aead_aegis256_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-aegis256-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a random AEGIS-256 key

## Description

```php
string sodium_crypto_aead_aegis256_keygen()
```

Generate a random key for use with `sodium_crypto_aead_aegis256_encrypt()` and `sodium_crypto_aead_aegis256_decrypt()`.

## Parameters

This function has no parameters.

## Return Values

Returns a 256-bit random key.

## See Also

 `sodium_crypto_aead_aegis256_decrypt()` `sodium_crypto_aead_aegis256_encrypt()`
