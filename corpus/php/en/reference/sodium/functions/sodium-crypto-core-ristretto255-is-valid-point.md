---
id: "en-php-function-function-sodium-crypto-core-ristretto255-is-valid-point"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_is_valid_point"
title: "Determines if a point on the ristretto255 curve"
signature: "bool sodium_crypto_core_ristretto255_is_valid_point(string $s)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-is-valid-point.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if a point on the ristretto255 curve

## Description

```php
bool sodium_crypto_core_ristretto255_is_valid_point(string $s)
```

Determines if a point on the ristretto255 curve, in canonical form, on the main subgroup, and that the point doesn't have a small order. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$s`** — An Elliptic-curve point.

## Return Values

Returns `true` if `$s` is on the ristretto255 curve, `false` otherwise.

## Examples

**`sodium_crypto_core_ristretto255_is_valid_point()` example**

```php


<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();
$bar = sodium_crypto_scalarmult_ristretto255_base($foo);

var_dump(sodium_crypto_core_ristretto255_is_valid_point($bar));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `sodium_crypto_core_ristretto255_scalar_random()` `sodium_crypto_scalarmult_ristretto255_base()`
