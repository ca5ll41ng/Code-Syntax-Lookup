---
id: "en-php-function-function-sodium-crypto-aead-chacha20poly1305-ietf-decrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_chacha20poly1305_ietf_decrypt"
title: "Verify that the ciphertext includes a valid tag"
signature: "string|false sodium_crypto_aead_chacha20poly1305_ietf_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify that the ciphertext includes a valid tag

## Description

```php
string|false sodium_crypto_aead_chacha20poly1305_ietf_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)
```

Verify then decrypt with ChaCha20-Poly1305 (IETF variant).

The IETF variant uses 96-bit nonces and 32-bit internal counters, instead of 64-bit for both.

## Parameters

- **`$ciphertext`** — Must be in the format provided by `sodium_crypto_aead_chacha20poly1305_ietf_encrypt()` (ciphertext and tag, concatenated).
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message. 12 bytes long.
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the plaintext on success, or `false` on failure.
