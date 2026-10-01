---
id: "en-php-function-function-sodium-crypto-core-ristretto255-scalar-negate"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_scalar_negate"
title: "Negates a scalar value"
signature: "string sodium_crypto_core_ristretto255_scalar_negate(string $s)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-negate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Negates a scalar value

## Description

```php
string sodium_crypto_core_ristretto255_scalar_negate(string $s)
```

Negates a scalar value. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$s`** — Scalar value.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_scalar_negate()` example**

```php


<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();

$negate = sodium_crypto_core_ristretto255_scalar_negate($foo);
$reNegate = sodium_crypto_core_ristretto255_scalar_negate($negate);

var_dump(hash_equals($foo, $reNegate));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `sodium_crypto_core_ristretto255_scalar_random()`
