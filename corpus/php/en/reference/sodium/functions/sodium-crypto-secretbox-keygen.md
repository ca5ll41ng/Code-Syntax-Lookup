---
id: "en-php-function-function-sodium-crypto-secretbox-keygen"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_secretbox_keygen"
title: "Generate random key for sodium_crypto_secretbox"
signature: "string sodium_crypto_secretbox_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-secretbox-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate random key for sodium_crypto_secretbox

## Description

```php
string sodium_crypto_secretbox_keygen()
```

Generate a key for use with `sodium_crypto_secretbox()` and `sodium_crypto_secretbox_open()`.

## Parameters

This function has no parameters.

## Return Values

Returns the generated string of cryptographically secure random bytes.

## Examples

**`sodium_crypto_secretbox_keygen()` example**

```php


<?php
$key = sodium_crypto_secretbox_keygen();
var_dump( sodium_bin2hex( $key ) );
?>

    
```

The above example will output something similar to:

```text


string(64) "88bd1dc51ec81984f3ddc5a8f59a3d95b647e2da3e879f1b9ceb0abd89e7286c"

    
```

**Comparing `sodium_crypto_secretbox_keygen()` with `random_bytes()`**

```php


<?php
$key = sodium_crypto_secretbox_keygen();
$bytes = random_bytes( SODIUM_CRYPTO_SECRETBOX_KEYBYTES );
var_dump( mb_strlen( $key, '8bit' ) === mb_strlen( $bytes, '8bit' ) );
?>

    
```

The above example will output:

```text


bool(true)

    
```

## See Also

 `sodium_bin2hex()` `random_bytes()`
