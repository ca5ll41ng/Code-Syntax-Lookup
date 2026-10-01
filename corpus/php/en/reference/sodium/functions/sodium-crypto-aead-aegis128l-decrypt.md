---
id: "en-php-function-function-sodium-crypto-aead-aegis128l-decrypt"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_aead_aegis128l_decrypt"
title: "Verify then decrypt a message with AEGIS-128L"
signature: "string|false sodium_crypto_aead_aegis128l_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-aead-aegis128l-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify then decrypt a message with AEGIS-128L

## Description

```php
string|false sodium_crypto_aead_aegis128l_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)
```

Verify then decrypt a message with AEGIS-128L.

## Parameters

- **`$ciphertext`** — Must be in the format provided by `sodium_crypto_aead_aegis128l_encrypt()`.
- **`$additional_data`** — Additional, authenticated data. This is used in the verification of the authentication tag appended to the ciphertext, but it is not encrypted or stored in the ciphertext.
- **`$nonce`** — A number that must be only used once, per message.
- **`$key`** — Encryption key (128-bit).

## Return Values

Returns the plaintext on success, or `false` on failure.

## See Also

 `sodium_crypto_aead_aegis128l_encrypt()` `sodium_crypto_aead_aegis128l_keygen()`
