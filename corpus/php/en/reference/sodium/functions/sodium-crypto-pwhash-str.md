---
id: "en-php-function-function-sodium-crypto-pwhash-str"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_pwhash_str"
title: "Get an ASCII-encoded hash"
signature: "string sodium_crypto_pwhash_str(string $password, int $opslimit, int $memlimit)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-pwhash-str.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an ASCII-encoded hash

## Description

```php
string sodium_crypto_pwhash_str(string $password, int $opslimit, int $memlimit)
```

Uses a CPU- and memory-hard hash algorithm along with a randomly-generated salt, and memory and CPU limits to generate an ASCII-encoded hash suitable for password storage.

## Parameters

- **`$password`** — `string`; The password to generate a hash for.
- **`$opslimit`** — Represents a maximum amount of computations to perform. Raising this number will make the function require more CPU cycles to compute a key. There are constants available to set the operations limit to appropriate values depending on intended use, in order of strength: `SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE`, `SODIUM_CRYPTO_PWHASH_OPSLIMIT_MODERATE` and `SODIUM_CRYPTO_PWHASH_OPSLIMIT_SENSITIVE`.
- **`$memlimit`** — The maximum amount of RAM that the function will use, in bytes. There are constants to help you choose an appropriate value, in order of size: `SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE`, `SODIUM_CRYPTO_PWHASH_MEMLIMIT_MODERATE`, and `SODIUM_CRYPTO_PWHASH_MEMLIMIT_SENSITIVE`. Typically these should be paired with the matching opslimit values.

## Return Values

Returns the hashed password.

In order to produce the same password hash from the same password, the same values for `$opslimit` and `$memlimit` must be used. These are embedded within the generated hash, so everything that's needed to verify the hash is included. This allows the `sodium_crypto_pwhash_str_verify()` function to verify the hash without needing separate storage for the other parameters.

## Examples

**`sodium_crypto_pwhash_str()` example**

```php


<?php
$password = 'password';
echo sodium_crypto_pwhash_str(
    $password,
    SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,
    SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE
);

   
```

The above example will output something similar to:

```text


$argon2id$v=19$m=65536,t=2,p=1$oWIfdaXwWwhVmovOBc2NAQ$EbsZ+JnZyyavkafS0hoc4HdaOB0ILWZESAZ7kVGa+Iw

   
```

## Notes

> Hashes are calculated using the Argon2ID algorithm, providing resistance to both GPU and side-channel attacks. In contrast to the `password_hash()` function, there is no salt parameter (a salt is generated automatically), and the `$opslimit` and `$memlimit` parameters are not optional.

## See Also

 `sodium_crypto_pwhash_str_verify()` `sodium_crypto_pwhash()` `password_hash()` `password_verify()` [Libsodium Argon2 docs]()
