---
id: "en-php-function-function-sodium-crypto-aead-xchacha20poly1305-ietf-encrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_xchacha20poly1305_ietf_encrypt"
title: "(Preferred) Encrypt then authenticate with XChaCha20-Poly1305"
signature: "string sodium_crypto_aead_xchacha20poly1305_ietf_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-xchacha20poly1305-ietf-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# (Preferred) Encrypt then authenticate with XChaCha20-Poly1305

## Description

```php
string sodium_crypto_aead_xchacha20poly1305_ietf_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

Encrypt then authenticate with XChaCha20-Poly1305 (eXtended-nonce variant).

Generally, XChaCha20-Poly1305 is the best of the provided AEAD modes to use.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.
