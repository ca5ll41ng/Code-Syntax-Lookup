---
id: "en-php-function-function-sodium-crypto-box-seed-keypair"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_seed_keypair"
title: "Deterministically derive the key pair from a single key"
signature: "string sodium_crypto_box_seed_keypair(string $seed)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-seed-keypair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deterministically derive the key pair from a single key

## Description

```php
string sodium_crypto_box_seed_keypair(string $seed)
```

Clamps the seed to form a secret key, derives the public key, and returns the two as a keypair.

The `*_seed_keypair` functions are ideal for generating a keypair from a password and salt. Use the result as a `$seed` to generate the desired keys.

## Parameters

- **`$seed`** — Some cryptographic input. Must be 32 bytes.

## Return Values

X25519 Keypair (secret key and public key).
