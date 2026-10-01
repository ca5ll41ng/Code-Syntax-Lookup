---
id: "en-php-function-function-sodium-crypto-core-ristretto255-scalar-random"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_scalar_random"
title: "Generates a random key"
signature: "string sodium_crypto_core_ristretto255_scalar_random()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-random.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a random key

## Description

```php
string sodium_crypto_core_ristretto255_scalar_random()
```

Generates a random key. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_scalar_random()` example**

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

 `sodium_crypto_core_ristretto255_scalar_add()` `sodium_crypto_core_ristretto255_scalar_sub()`
