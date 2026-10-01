---
id: "en-php-function-function-sodium-crypto-sign-keypair-from-secretkey-and-publickey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_keypair_from_secretkey_and_publickey"
title: "Join a secret key and public key together"
signature: "string sodium_crypto_sign_keypair_from_secretkey_and_publickey(string $secret_key, string $public_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-keypair-from-secretkey-and-publickey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Join a secret key and public key together

## Description

```php
string sodium_crypto_sign_keypair_from_secretkey_and_publickey(string $secret_key, string $public_key)
```

Join a secret key and public key together.

## Parameters

- **`$secret_key`** — Ed25519 secret key
- **`$public_key`** — Ed25519 public key

## Return Values

Keypair
