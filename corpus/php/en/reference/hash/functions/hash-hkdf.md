---
id: "en-php-function-function-hash-hkdf"
language: "php"
lang: "en"
category: "function"
name: "hash_hkdf"
title: "Generate a HKDF key derivation of a supplied key input"
signature: "string hash_hkdf(string $algo, string $key, int $length = 0, string $info = \"\", string $salt = \"\")"
module: "hash"
source_url: "https://www.php.net/manual/en/function.hash-hkdf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a HKDF key derivation of a supplied key input

## Description

```php
string hash_hkdf(string $algo, string $key, int $length = 0, string $info = "", string $salt = "")
```

## Parameters

- **`$algo`** — Name of selected hashing algorithm (e.g. `"sha256"`). For a list of supported algorithms see `hash_hmac_algos()`. > Non-cryptographic hash functions are not allowed.
- **`$key`** — Input keying material (raw binary). Cannot be empty.
- **`$length`** — Desired output length in bytes. Cannot be greater than 255 times the chosen hash function size. — If `$length` is `0`, the output length will default to the chosen hash function size.
- **`$info`** — Application/context-specific info string.
- **`$salt`** — Salt to use during derivation. — While optional, adding random salt significantly improves the strength of HKDF.

## Return Values

Returns a string containing a raw binary representation of the derived key (also known as output keying material - OKM).

## Errors/Exceptions

Throws a `ValueError` exception if `$key` is empty, `$algo` is unknown/non-cryptographic, `$length` is less than `0` or too large (greater than 255 times the size of the hash function).

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` exception on error. Previously, `false` was returned and an `E_WARNING` message was emitted. |

## Examples

The example below produces a pair of separate keys, suitable for creation of an encrypt-then-HMAC construct, using AES-256 and SHA-256 for encryption and authentication respectively.

**`hash_hkdf()` example**

```php


<?php
// Generate a random key, and salt to strengthen it during derivation.
$inputKey = random_bytes(32);
$salt = random_bytes(16);

// Derive a pair of separate keys, using the same input created above.
$encryptionKey = hash_hkdf('sha256', $inputKey, 32, 'aes-256-encryption', $salt);
$authenticationKey = hash_hkdf('sha256', $inputKey, 32, 'sha-256-authentication', $salt);

var_dump($encryptionKey !== $authenticationKey); // bool(true)
?>

    
```

## See Also

`hash_pbkdf2()` [RFC 5869](5869) [userland implementation](narfbg/hash_hkdf_compat)
