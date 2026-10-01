---
id: "en-php-function-function-sodium-crypto-pwhash-str-verify"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_pwhash_str_verify"
title: "Verifies that a password matches a hash"
signature: "bool sodium_crypto_pwhash_str_verify(string $hash, string $password)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-pwhash-str-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verifies that a password matches a hash

## Description

```php
bool sodium_crypto_pwhash_str_verify(string $hash, string $password)
```

Checks that a password hash created using `sodium_crypto_pwhash_str()` matches a given plain-text password. Note that the parameters are in the opposite order to the same parameters in the similar `password_verify()` function.

## Parameters

- **`$hash`** — A hash created by `password_hash()`.
- **`$password`** — The user's password.

## Return Values

Returns `true` if the password and hash match, or `false` otherwise.

## Notes

> Hashes are calculated using the Argon2ID algorithm, providing resistance to both GPU and side-channel attacks.

## See Also

 `sodium_crypto_pwhash_str()` `password_hash()` `password_verify()`
