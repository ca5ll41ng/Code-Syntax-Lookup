---
id: "en-php-function-function-sodium-crypto-scalarmult-ristretto255"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_scalarmult_ristretto255"
title: "Computes a shared secret"
signature: "string sodium_crypto_scalarmult_ristretto255(string $n, string $p)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-scalarmult-ristretto255.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Computes a shared secret

## Description

```php
string sodium_crypto_scalarmult_ristretto255(string $n, string $p)
```

Calculates scalar `$n` times point `$p`. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$n`** — A scalar, which is typically a secret key.
- **`$p`** — A point (x-coordinate), which is typically a public key.

## Return Values

Returns a 32-byte random `string`.

## See Also

 `sodium_crypto_scalarmult_ristretto255_base()`
