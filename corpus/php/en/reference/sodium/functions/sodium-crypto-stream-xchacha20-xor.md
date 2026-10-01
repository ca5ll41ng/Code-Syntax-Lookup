---
id: "en-php-function-function-sodium-crypto-stream-xchacha20-xor"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_stream_xchacha20_xor"
title: "Encrypts a message using a nonce and a secret key (no authentication)"
signature: "string sodium_crypto_stream_xchacha20_xor(string $message, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20-xor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypts a message using a nonce and a secret key (no authentication)

## Description

```php
string sodium_crypto_stream_xchacha20_xor(string $message, string $nonce, string $key)
```

Encrypts a `$message` using a `$nonce` and a secret `$key` (no authentication).

> This encryption is unauthenticated, and does not prevent chosen-ciphertext attacks. Make sure to combine the ciphertext with a Message Authentication Code, for example with `sodium_crypto_aead_xchacha20poly1305_ietf_encrypt()` function, or `sodium_crypto_auth()`.

## Parameters

- **`$message`** — The message to encrypt.
- **`$nonce`** — 24-byte nonce.
- **`$key`** — Key, possibly generated from `sodium_crypto_stream_xchacha20_keygen()`.

## Return Values

Encrypted message.

## See Also

 `sodium_crypto_stream_xchacha20_xor_ic()`
