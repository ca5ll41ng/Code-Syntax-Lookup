---
id: "en-php-function-function-sodium-crypto-aead-chacha20poly1305-ietf-encrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_chacha20poly1305_ietf_encrypt"
title: "Encrypt a message"
signature: "string sodium_crypto_aead_chacha20poly1305_ietf_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt a message

## Description

```php
string sodium_crypto_aead_chacha20poly1305_ietf_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

Encrypt then authenticate with ChaCha20-Poly1305 (IETF variant).

The IETF variant uses 96-bit nonces and 32-bit internal counters, instead of 64-bit for both.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message. 12 bytes long.
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.
