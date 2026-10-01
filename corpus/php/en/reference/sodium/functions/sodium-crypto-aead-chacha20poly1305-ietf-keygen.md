---
id: "en-php-function-function-sodium-crypto-aead-chacha20poly1305-ietf-keygen"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_chacha20poly1305_ietf_keygen"
title: "Generate a random ChaCha20-Poly1305 (IETF) key."
signature: "string sodium_crypto_aead_chacha20poly1305_ietf_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-ietf-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a random ChaCha20-Poly1305 (IETF) key.

## Description

```php
string sodium_crypto_aead_chacha20poly1305_ietf_keygen()
```

Generate a random key for use with `sodium_crypto_aead_chacha20poly1305_ietf_encrypt()` and `sodium_crypto_aead_chacha20poly1305_ietf_decrypt()`.

## Parameters

This function has no parameters.

## Return Values

Returns a 256-bit random key.
