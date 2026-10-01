---
id: "en-php-function-function-openssl-password-verify"
language: "php"
lang: "en"
category: "function"
name: "openssl_password_verify"
title: "Verify a password against a hash using OpenSSL's Argon2 implementation"
signature: "bool openssl_password_verify(string $algo, string $password, string $hash)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-password-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify a password against a hash using OpenSSL's Argon2 implementation

## Description

```php
bool openssl_password_verify(string $algo, string $password, string $hash)
```

Verifies that a password matches a hash created by `openssl_password_hash()`.

This function is only available when PHP is compiled with OpenSSL support that includes Argon2 (`HAVE_OPENSSL_ARGON2`).

## Parameters

- **`$algo`** — The password hashing algorithm. Supported values: `"argon2id"` and `"argon2i"`.
- **`$password`** — The user's password.
- **`$hash`** — A hash created by `openssl_password_hash()`.

## Return Values

Returns `true` if the password and hash match, or `false` otherwise.

## Errors/Exceptions

Throws a `ValueError` if `$algo` is not one of the supported values (`"argon2i"` or `"argon2id"`).

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Function added. |

## Examples

**`openssl_password_verify()` example**

```php


<?php
$hash = openssl_password_hash('argon2id', 'my-secret-password');

if (openssl_password_verify('argon2id', 'my-secret-password', $hash)) {
    echo 'Password matches.';
} else {
    echo 'Password does not match.';
}
?>

   
```

## See Also

`openssl_password_hash()` `password_verify()`
