---
id: "en-php-function-function-sodium-crypto-core-ristretto255-from-hash"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_core_ristretto255_from_hash"
title: "Maps a vector"
signature: "string sodium_crypto_core_ristretto255_from_hash(string $s)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-from-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps a vector

## Description

```php
string sodium_crypto_core_ristretto255_from_hash(string $s)
```

Maps a 64-bytes vector `$s` to a group element. Available as of libsodium 1.0.18.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$s`** — A 64-bytes vector.

## Return Values

Returns a 32-byte random `string`.

## Examples

**`sodium_crypto_core_ristretto255_from_hash()` example**

```php


<?php

$hashes = sodium_hex2bin(
    '5d1be09e3d0c82fc538112490e35701979d99e06ca3e2b5b54bffe8b4dc772c1' .
    '4d98b696a1bbfb5ca32c436cc61c16563790306c79eaca7705668b47dffe5bb6'
);
var_dump(sodium_bin2hex(sodium_crypto_core_ristretto255_from_hash($hashes)));
?>

   
```

The above example will output:

```text


string(64) "3066f82a1a747d45120d1740f14358531a8f04bbffe6a819f86dfe50f44a0a46"

   
```

## See Also

 `sodium_hex2bin()` `sodium_bin2hex()` `sodium_crypto_core_ristretto255_from_hash()`
