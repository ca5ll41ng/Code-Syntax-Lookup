---
id: "en-php-function-function-sodium-crypto-box-keypair"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_keypair"
title: "Randomly generate a secret key and a corresponding public key"
signature: "string sodium_crypto_box_keypair()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-keypair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Randomly generate a secret key and a corresponding public key

## Description

```php
string sodium_crypto_box_keypair()
```

Generates a secret key and a public key as one string.

To get the secret key out of this unified keypair string, see `sodium_crypto_box_secretkey()`. To get the public key out of this unified keypair string, see `sodium_crypto_box_publickey()`.

## Parameters

This function has no parameters.

## Return Values

One string containing both the X25519 secret key and corresponding X25519 public key.
