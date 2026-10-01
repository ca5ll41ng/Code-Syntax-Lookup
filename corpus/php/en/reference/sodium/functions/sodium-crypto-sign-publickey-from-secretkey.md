---
id: "en-php-function-function-sodium-crypto-sign-publickey-from-secretkey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_publickey_from_secretkey"
title: "Extract the Ed25519 public key from the secret key"
signature: "string sodium_crypto_sign_publickey_from_secretkey(string $secret_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-publickey-from-secretkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extract the Ed25519 public key from the secret key

## Description

```php
string sodium_crypto_sign_publickey_from_secretkey(string $secret_key)
```

Extract the Ed25519 public key from the secret key

## Parameters

- **`$secret_key`** — Ed25519 secret key

## Return Values

Ed25519 public key
