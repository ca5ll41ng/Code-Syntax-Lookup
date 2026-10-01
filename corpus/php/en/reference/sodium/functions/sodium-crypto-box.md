---
id: "en-php-function-function-sodium-crypto-box"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box"
title: "Authenticated public-key encryption"
signature: "string sodium_crypto_box(string $message, string $nonce, string $key_pair)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticated public-key encryption

## Description

```php
string sodium_crypto_box(string $message, string $nonce, string $key_pair)
```

Encrypt a message using asymmetric (public key) cryptography.

The algorithm used by functions prefixed with `sodium_crypto_box()` are Elliptic Curve Diffie-Hellman over the Montgomery curve, Curve25519; usually abbreviated as X25519.

## Parameters

- **`$message`** — The message to be encrypted.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key_pair`** — See `sodium_crypto_box_keypair_from_secretkey_and_publickey()`. This should include the sender's X25519 secret key and the recipient's X25519 public key.

## Return Values

Returns the encrypted message (ciphertext plus authentication tag). The ciphertext will be 16 bytes longer than the plaintext, and a raw binary string. See `sodium_bin2base64()` for safe encoding for storage.
