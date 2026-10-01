---
id: "en-php-function-function-sodium-crypto-aead-xchacha20poly1305-ietf-decrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_xchacha20poly1305_ietf_decrypt"
title: "(Preferred) Verify then decrypt with XChaCha20-Poly1305"
signature: "string|false sodium_crypto_aead_xchacha20poly1305_ietf_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# (Preferred) Verify then decrypt with XChaCha20-Poly1305

## Description

```php
string|false sodium_crypto_aead_xchacha20poly1305_ietf_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)
```

Verify then decrypt with ChaCha20-Poly1305 (eXtended-nonce variant).

Generally, XChaCha20-Poly1305 is the best of the provided AEAD modes to use.

## Parameters

- **`$ciphertext`** — Must be in the format provided by `sodium_crypto_aead_xchacha20poly1305_ietf_encrypt()` (ciphertext and tag, concatenated).
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the plaintext on success, or `false` on failure.
