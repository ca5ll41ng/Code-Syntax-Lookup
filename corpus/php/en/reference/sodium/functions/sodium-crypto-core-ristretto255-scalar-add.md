---
id: "en-php-function-function-sodium-crypto-core-ristretto255-scalar-add"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_scalar_add"
title: "Adds a scalar value"
signature: "string sodium_crypto_core_ristretto255_scalar_add(string $x, string $y)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a scalar value

## Description

```php
string sodium_crypto_core_ristretto255_scalar_add(string $x, string $y)
```

Adds an element `$y` to `$x`. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$x`** — Scalar, representing the X coordinate.
- **`$y`** — Scalar, representing the Y coordinate.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_scalar_add()` example**

```php


<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();
$bar = sodium_crypto_core_ristretto255_scalar_random();

$value = sodium_crypto_core_ristretto255_scalar_add($foo, $bar);
$value = sodium_crypto_core_ristretto255_scalar_sub($value, $bar);

var_dump(hash_equals($foo, $value));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `sodium_crypto_core_ristretto255_scalar_random()` `sodium_crypto_core_ristretto255_scalar_sub()`
