---
id: "en-php-function-function-sodium-crypto-sign-detached"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_detached"
title: "Sign the message"
signature: "string sodium_crypto_sign_detached(string $message, string $secret_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-detached.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sign the message

## Description

```php
string sodium_crypto_sign_detached(string $message, string $secret_key)
```

Sign a message with a secret key, that can be verified by the corresponding public key. This function returns a detached signature.

## Parameters

- **`$message`** — Message to sign.
- **`$secret_key`** — Secret key. See `sodium_crypto_sign_secretkey()`

## Return Values

Cryptographic signature.
