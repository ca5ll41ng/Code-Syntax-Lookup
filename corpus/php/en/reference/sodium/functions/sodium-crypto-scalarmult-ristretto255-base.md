---
id: "en-php-function-function-sodium-crypto-scalarmult-ristretto255-base"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_scalarmult_ristretto255_base"
title: "Calculates the public key from a secret key"
signature: "string sodium_crypto_scalarmult_ristretto255_base(string $n)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-scalarmult-ristretto255-base.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates the public key from a secret key

## Description

```php
string sodium_crypto_scalarmult_ristretto255_base(string $n)
```

Given a secret key, calculates the corresponding public key. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$n`** — A secret key.

## Return Values

Returns a 32-byte random `string`.

## See Also

 `sodium_crypto_scalarmult_ristretto255()`
