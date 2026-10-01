---
id: "en-php-function-function-sodium-crypto-box-keypair-from-secretkey-and-publickey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_keypair_from_secretkey_and_publickey"
title: "Create a unified keypair string from a secret key and public key"
signature: "string sodium_crypto_box_keypair_from_secretkey_and_publickey(string $secret_key, string $public_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-keypair-from-secretkey-and-publickey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a unified keypair string from a secret key and public key

## Description

```php
string sodium_crypto_box_keypair_from_secretkey_and_publickey(string $secret_key, string $public_key)
```

This function exists to satisfy the API requirements of e.g. `crypto_box()`. Pass in one party's secret key and the other's public key, and you will obtain a "keypair" for your conversation.

## Parameters

- **`$secret_key`** — Secret key.
- **`$public_key`** — Public key.

## Return Values

X25519 Keypair.
