---
id: "en-php-function-function-crypt-checksalt"
language: "php"
lang: "en"
category: "function"
name: "crypt_checksalt"
title: "Validate a crypt setting string"
signature: "string|null crypt_checksalt(string $salt)"
module: "xpass"
source_url: "https://www.php.net/manual/en/function.crypt-checksalt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validate a crypt setting string

## Description

```php
string|null crypt_checksalt(string $salt)
```

Checks the salt string against the system configuration and reports whether the hashing method and parameters it specifies are acceptable. It is intended to be used to determine whether the user's passphrase should be re-hashed using the currently preferred hashing method.

## Parameters

- **`$salt`** — Salt string to check.

## Return Values

Returns one of the `CRYPT_SALT_{*}` as an `int`.

## Examples

**A `crypt_checksalt()` example**

```php


<?php
// Generate a salt for a legacy method
$salt = crypt_gensalt(CRYPT_PREFIX_STD_DES);
// Check the salt
$test = crypt_checksalt($salt);
var_dump($test === CRYPT_SALT_METHOD_LEGACY);

// Generate a salt for default method
$salt = crypt_gensalt();
// Check the salt
$test = crypt_checksalt($salt);
var_dump($test === CRYPT_SALT_OK);
?>

   
```

The above example will output:

```text


bool(true)
bool(true)

   
```

## See Also

 `crypt_gensalt()`
