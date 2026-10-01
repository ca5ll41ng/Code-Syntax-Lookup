---
id: "en-php-function-function-sodium-crypto-sign-ed25519-pk-to-curve25519"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_ed25519_pk_to_curve25519"
title: "Convert an Ed25519 public key to a Curve25519 public key"
signature: "string sodium_crypto_sign_ed25519_pk_to_curve25519(string $public_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-ed25519-pk-to-curve25519.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert an Ed25519 public key to a Curve25519 public key

## Description

```php
string sodium_crypto_sign_ed25519_pk_to_curve25519(string $public_key)
```

Given an Ed25519 public key, calculate the birationally equivalent X25519 public key.

## Parameters

- **`$public_key`** — Public key suitable for the crypto_sign functions.

## Return Values

Public key suitable for the crypto_box functions.
