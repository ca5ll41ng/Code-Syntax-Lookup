---
id: "en-php-function-function-sodium-crypto-generichash-update"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_generichash_update"
title: "Add message to a hash"
signature: "true sodium_crypto_generichash_update(string $state, string $message)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-generichash-update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add message to a hash

## Description

```php
true sodium_crypto_generichash_update(string $state, string $message)
```

Appends a message to the internal hash state.

## Parameters

- **`$state`** — The return value of `sodium_crypto_generichash_init()`.
- **`$message`** — Data to append to the hashing state.

## Return Values

Always returns `true`.

## Examples

 {{{ 

**`sodium_crypto_generichash_update()` example**

 {{{ 

```php


<?php
$messages = [random_bytes(32), random_bytes(32), random_bytes(16)];
$state = sodium_crypto_generichash_init();
foreach ($messages as $message) {
    sodium_crypto_generichash_update($state, $message);
}
$final = sodium_crypto_generichash_final($state);
var_dump(sodium_bin2hex($final));

$allAtOnce = sodium_crypto_generichash(implode('', $messages));
var_dump(sodium_bin2hex($allAtOnce));
?>

   
```

The above example will output something similar to:

```text


string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"
string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"

   
```

 }}} 

 }}}
