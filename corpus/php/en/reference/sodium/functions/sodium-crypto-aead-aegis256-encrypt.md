---
id: "en-php-function-function-sodium-crypto-aead-aegis256-encrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_aegis256_encrypt"
title: "Encrypt then authenticate a message with AEGIS-256"
signature: "string sodium_crypto_aead_aegis256_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-aegis256-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt then authenticate a message with AEGIS-256

## Description

```php
string sodium_crypto_aead_aegis256_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

Encrypt then authenticate a message with AEGIS-256.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message.
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.

## See Also

 `sodium_crypto_aead_aegis256_decrypt()` `sodium_crypto_aead_aegis256_keygen()`
