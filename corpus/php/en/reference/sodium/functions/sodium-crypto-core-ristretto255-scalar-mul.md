---
id: "en-php-function-function-sodium-crypto-core-ristretto255-scalar-mul"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_scalar_mul"
title: "Multiplies a scalar value"
signature: "string sodium_crypto_core_ristretto255_scalar_mul(string $x, string $y)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-mul.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Multiplies a scalar value

## Description

```php
string sodium_crypto_core_ristretto255_scalar_mul(string $x, string $y)
```

Multiplies a scalar value. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$x`** — Scalar, representing the X coordinate.
- **`$y`** — Scalar, representing the Y coordinate.

## Return Values

Returns a 32-byte random `string`.

## See Also

 `sodium_crypto_core_ristretto255_scalar_random()`
