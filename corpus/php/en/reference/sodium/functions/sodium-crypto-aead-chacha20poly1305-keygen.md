---
id: "en-php-function-function-sodium-crypto-aead-chacha20poly1305-keygen"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_chacha20poly1305_keygen"
title: "Generate a random ChaCha20-Poly1305 key."
signature: "string sodium_crypto_aead_chacha20poly1305_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a random ChaCha20-Poly1305 key.

## Description

```php
string sodium_crypto_aead_chacha20poly1305_keygen()
```

Generate a random key for use with `sodium_crypto_aead_chacha20poly1305_encrypt()` and `sodium_crypto_aead_chacha20poly1305_decrypt()`.

## Parameters

This function has no parameters.

## Return Values

Returns a 256-bit random key.
