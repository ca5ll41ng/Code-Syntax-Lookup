---
id: "en-php-function-function-sodium-crypto-sign-verify-detached"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_verify_detached"
title: "Verify signature for the message"
signature: "bool sodium_crypto_sign_verify_detached(string $signature, string $message, string $public_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-verify-detached.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify signature for the message

## Description

```php
bool sodium_crypto_sign_verify_detached(string $signature, string $message, string $public_key)
```

Verify signature for the message

## Parameters

- **`$signature`** — The cryptographic signature obtained from `sodium_crypto_sign_detached()`
- **`$message`** — The message being verified
- **`$public_key`** — Ed25519 public key

## Return Values

Returns `true` on success or `false` on failure.
