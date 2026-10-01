---
id: "en-php-function-function-sodium-crypto-sign"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign"
title: "Sign a message"
signature: "string sodium_crypto_sign(string $message, string $secret_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sign a message

## Description

```php
string sodium_crypto_sign(string $message, string $secret_key)
```

Sign a message with a secret key, that can be verified by the corresponding public key. This function attaches the signature to the message. See `sodium_crypto_sign_detached()` for detached signatures.

## Parameters

- **`$message`** — Message to sign.
- **`$secret_key`** — Secret key. See `sodium_crypto_sign_secretkey()`

## Return Values

Signed message (not encrypted).
