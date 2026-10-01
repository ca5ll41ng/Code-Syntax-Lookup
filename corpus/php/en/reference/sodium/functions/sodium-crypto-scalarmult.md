---
id: "en-php-function-function-sodium-crypto-scalarmult"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_scalarmult"
title: "Compute a shared secret given a user's secret key and another user's public key"
signature: "string sodium_crypto_scalarmult(string $n, string $p)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-scalarmult.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compute a shared secret given a user's secret key and another user's public key

## Description

```php
string sodium_crypto_scalarmult(string $n, string $p)
```

Elliptic Curve Diffie-Hellman. Calculates scalar n times point p, on an elliptic curve.

## Parameters

- **`$n`** — scalar, which is typically a secret key
- **`$p`** — point (x-coordinate), which is typically a public key

## Return Values

A 32-byte random string.
