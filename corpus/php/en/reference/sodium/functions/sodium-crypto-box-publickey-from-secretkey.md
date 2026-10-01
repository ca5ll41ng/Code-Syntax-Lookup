---
id: "en-php-function-function-sodium-crypto-box-publickey-from-secretkey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_publickey_from_secretkey"
title: "Calculate the public key from a secret key"
signature: "string sodium_crypto_box_publickey_from_secretkey(string $secret_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-publickey-from-secretkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate the public key from a secret key

## Description

```php
string sodium_crypto_box_publickey_from_secretkey(string $secret_key)
```

Given a secret key, calculate the corresponding public key.

This only works with the type of keys intended for use with `crypto_box()` (which uses Elliptic Curve Diffie-Hellman over the Montgomery curve, Curve25519; abbreviated as X25519), not `crypto_sign()` (which uses Edwards Digital Signature Algorithm over the Edwards Curve with the corresponding parameters; abbreviated Ed25519).

## Parameters

- **`$secret_key`** — X25519 secret key

## Return Values

X25519 public key.
