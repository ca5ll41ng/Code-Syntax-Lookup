---
id: "en-php-function-function-sodium-crypto-pwhash-str-needs-rehash"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_pwhash_str_needs_rehash"
title: "Determine whether or not to rehash a password"
signature: "bool sodium_crypto_pwhash_str_needs_rehash(string $password, int $opslimit, int $memlimit)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-pwhash-str-needs-rehash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine whether or not to rehash a password

## Description

```php
bool sodium_crypto_pwhash_str_needs_rehash(string $password, int $opslimit, int $memlimit)
```

Determine whether or not to rehash a password, based on the current hash `$opslimit` and `$memlimit`.

## Parameters

- **`$password`** — Password hash
- **`$opslimit`** — Configured opslimit; see `sodium_crypto_pwhash_str()`
- **`$memlimit`** — Configured memlimit; see `sodium_crypto_pwhash_str()`

## Return Values

Returns `true` if the provided memlimit/opslimit do not match what's stored in the hash. Returns `false` if they match.
