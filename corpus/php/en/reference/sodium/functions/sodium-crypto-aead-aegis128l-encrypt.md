---
id: "en-php-function-function-sodium-crypto-aead-aegis128l-encrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_aegis128l_encrypt"
title: "Encrypt then authenticate a message with AEGIS-128L"
signature: "string sodium_crypto_aead_aegis128l_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-aegis128l-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt then authenticate a message with AEGIS-128L

## Description

```php
string sodium_crypto_aead_aegis128l_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

Encrypt then authenticate a message with AEGIS-128L.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message.
- **`$key`** — Encryption key (128-bit).

## Return Values

Returns the ciphertext and authentication tag as a string of raw binary bytes.

## See Also

 `sodium_crypto_aead_aegis128l_decrypt()` `sodium_crypto_aead_aegis128l_keygen()`
