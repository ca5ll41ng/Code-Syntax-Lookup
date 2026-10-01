---
id: "en-php-function-function-openssl-password-hash"
language: "php"
lang: "en"
category: "function"
name: "openssl_password_hash"
title: "Create a password hash using OpenSSL's Argon2 implementation"
signature: "string openssl_password_hash(string $algo, string $password, array $options = [])"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-password-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a password hash using OpenSSL's Argon2 implementation

## Description

```php
string openssl_password_hash(string $algo, string $password, array $options = [])
```

Creates a password hash using OpenSSL's Argon2 implementation. This is an alternative to `password_hash()` that uses OpenSSL as the backend, which may offer hardware acceleration on some platforms.

This function is only available when PHP is compiled with OpenSSL support that includes Argon2 (`HAVE_OPENSSL_ARGON2`).

## Parameters

- **`$algo`** — The password hashing algorithm. Supported values: `"argon2id"` and `"argon2i"`.
- **`$password`** — The user's password.
- **`$options`** — An associative `array` of options. Supported keys: `memory_cost` - Maximum memory (in KiB) that may be used to compute the hash `time_cost` - Maximum amount of time it may take to compute the hash `threads` - Number of threads to use for computing the hash

## Return Values

Returns the password hash as a `string`.

## Errors/Exceptions

Throws a `ValueError` if `$algo` is not one of the supported values (`"argon2i"` or `"argon2id"`).

Throws an `Error` if the hashing operation fails for an unknown reason.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Function added. |

## Examples

**`openssl_password_hash()` example**

```php


<?php
$hash = openssl_password_hash('argon2id', 'my-secret-password');
echo $hash;
?>

   
```

The above example will output something similar to:

```text


$argon2id$v=19$m=65536,t=4,p=1$c29tZXNhbHR2YWx1ZQ$hashvalue...

   
```

**`openssl_password_hash()` with custom options**

```php


<?php
$hash = openssl_password_hash('argon2id', 'my-secret-password', [
    'memory_cost' => 65536,
    'time_cost'   => 4,
    'threads'     => 1,
]);
?>

   
```

## See Also

`openssl_password_verify()` `password_hash()`
