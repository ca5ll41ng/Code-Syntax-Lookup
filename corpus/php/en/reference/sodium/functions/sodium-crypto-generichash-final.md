---
id: "en-php-function-function-sodium-crypto-generichash-final"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_generichash_final"
title: "Complete the hash"
signature: "string sodium_crypto_generichash_final(string $state, int $length = SODIUM_CRYPTO_GENERICHASH_BYTES)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-generichash-final.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Complete the hash

## Description

```php
string sodium_crypto_generichash_final(string $state, int $length = SODIUM_CRYPTO_GENERICHASH_BYTES)
```

The finalization method for the streaming generichash API.

## Parameters

- **`$state`** — Hash state returned from `sodium_crypto_generichash_init()`
- **`$length`** — Output length.

## Return Values

Cryptographic hash.

## Examples

 {{{ 

**`sodium_crypto_generichash_final()` example**

 {{{ 

```php


<?php
$messages = [random_bytes(32), random_bytes(32), random_bytes(16)];
$state = sodium_crypto_generichash_init('', 32);
foreach ($messages as $message) {
    sodium_crypto_generichash_update($state, $message);
}

$final = sodium_crypto_generichash_final($state, 32);
var_dump(sodium_bin2hex($final));

$allAtOnce = sodium_crypto_generichash(implode('', $messages));
var_dump(sodium_bin2hex($allAtOnce));
?>

   
```

The above example will output something similar to:

```text


string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"
string(64) "a2939a9163cb7c796ec28e01028489e72475c136b2697ea59e3e760ab4a8ab20"

   
```

 }}} 

 }}}
