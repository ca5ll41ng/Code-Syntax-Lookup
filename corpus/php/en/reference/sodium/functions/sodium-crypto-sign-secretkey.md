---
id: "en-php-function-function-sodium-crypto-sign-secretkey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_secretkey"
title: "Extract the Ed25519 secret key from a keypair"
signature: "string sodium_crypto_sign_secretkey(string $key_pair)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-secretkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extract the Ed25519 secret key from a keypair

## Description

```php
string sodium_crypto_sign_secretkey(string $key_pair)
```

Extract the Ed25519 secret key from a keypair

## Parameters

- **`$key_pair`** — Ed25519 keypair (see: `sodium_crypto_sign_keypair()`)

## Return Values

Ed25519 secret key
