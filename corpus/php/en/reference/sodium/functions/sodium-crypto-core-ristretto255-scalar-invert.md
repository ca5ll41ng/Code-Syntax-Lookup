---
id: "en-php-function-function-sodium-crypto-core-ristretto255-scalar-invert"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_scalar_invert"
title: "Inverts a scalar value"
signature: "string sodium_crypto_core_ristretto255_scalar_invert(string $s)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-invert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inverts a scalar value

## Description

```php
string sodium_crypto_core_ristretto255_scalar_invert(string $s)
```

Inverts a scalar value. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$s`** — Scalar value.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_scalar_invert()` example**

```php


<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();

$inverted = sodium_crypto_core_ristretto255_scalar_invert($foo);
$reInverted = sodium_crypto_core_ristretto255_scalar_invert($inverted);

var_dump(hash_equals($foo, $reInverted));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `sodium_crypto_core_ristretto255_scalar_random()`
