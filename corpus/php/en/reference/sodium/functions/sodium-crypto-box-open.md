---
id: "en-php-function-function-sodium-crypto-box-open"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_open"
title: "Authenticated public-key decryption"
signature: "string|false sodium_crypto_box_open(string $ciphertext, string $nonce, string $key_pair)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticated public-key decryption

## Description

```php
string|false sodium_crypto_box_open(string $ciphertext, string $nonce, string $key_pair)
```

Decrypt a message using asymmetric (public key) cryptography.

## Parameters

- **`$ciphertext`** — The encrypted message to attempt to decrypt.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key_pair`** — See `sodium_crypto_box_keypair_from_secretkey_and_publickey()`. This should include the sender's public key and the recipient's secret key.

## Return Values

Returns the plaintext message on success, or `false` on failure.
