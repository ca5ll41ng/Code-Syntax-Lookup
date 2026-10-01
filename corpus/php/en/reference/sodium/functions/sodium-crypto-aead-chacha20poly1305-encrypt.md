---
id: "en-php-function-function-sodium-crypto-aead-chacha20poly1305-encrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_chacha20poly1305_encrypt"
title: "Encrypt then authenticate with ChaCha20-Poly1305"
signature: "string sodium_crypto_aead_chacha20poly1305_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-chacha20poly1305-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt then authenticate with ChaCha20-Poly1305

## Description

```php
string sodium_crypto_aead_chacha20poly1305_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

Encrypt then authenticate with ChaCha20-Poly1305.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message. 8 bytes long.
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.
