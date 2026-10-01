---
id: "en-php-function-function-sodium-crypto-core-ristretto255-sub"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_sub"
title: "Subtracts an element"
signature: "string sodium_crypto_core_ristretto255_sub(string $p, string $q)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-sub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Subtracts an element

## Description

```php
string sodium_crypto_core_ristretto255_sub(string $p, string $q)
```

Subtracts an element `$q` from `$p`. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$p`** — An element.
- **`$q`** — An element.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_sub()` example**

```php


<?php

$foo = sodium_crypto_core_ristretto255_random();
$bar = sodium_crypto_core_ristretto255_random();

$value = sodium_crypto_core_ristretto255_add($foo, $bar);
$value = sodium_crypto_core_ristretto255_sub($value, $bar);

var_dump(hash_equals($foo, $value));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `sodium_crypto_core_ristretto255_random()` `sodium_crypto_core_ristretto255_add()`
