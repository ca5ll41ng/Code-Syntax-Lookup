---
id: "en-php-function-function-sodium-crypto-stream-xor"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_stream_xor"
title: "Encrypt a message without authentication"
signature: "string sodium_crypto_stream_xor(string $message, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-stream-xor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt a message without authentication

## Description

```php
string sodium_crypto_stream_xor(string $message, string $nonce, string $key)
```

This function encrypts a message with XSalsa20, but does not provide any ciphertext guarantees about the plaintext.

## Parameters

- **`$message`** — The message to encrypt
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

Encrypted message.
