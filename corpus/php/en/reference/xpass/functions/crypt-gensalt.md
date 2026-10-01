---
id: "en-php-function-function-crypt-gensalt"
language: "php"
lang: "en"
category: "function"
name: "crypt_gensalt"
title: "Compile a string for use as the salt argument to crypt"
signature: "string|null crypt_gensalt(string $prefix = null, int $count = 0)"
module: "xpass"
source_url: "https://www.php.net/manual/en/function.crypt-gensalt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compile a string for use as the salt argument to crypt

## Description

```php
string|null crypt_gensalt(string $prefix = null, int $count = 0)
```

Compile a string for use as the salt argument to `crypt()`.

## Parameters

- **`$prefix`** — Hashing method. One of the `CRYPT_PREFIX_{*}` constant. If `null`, the best available hashing method will be selected.
- **`$count`** — Controls the processing cost of the hash; the valid range and exact meaning of count depend on the hashing method, but larger numbers correspond to more costly hashes in terms of CPU time and possibly memory usage. If count is `0`, a low default cost will be selected.

## Return Values

Returns a string with the setting, or `null` in case of an error.

## Examples

**A `crypt_gensalt()` example**

```php


<?php
// Generate the salt
$salt = crypt_gensalt(CRYPT_PREFIX_BLOWFISH);
// Hash the password
$hash = crypt("secret", $salt);
// Check the hash
$test = hash_equals(crypt("secret", $hash), $hash);
var_dump($salt, $hash, $test);
?>

   
```

The above example will output:

```text


string(29) "$2y$05$GcPykP.Am8C1.dGamdpwW."
string(60) "$2y$05$GcPykP.Am8C1.dGamdpwW.1RR.7uicWvJPZfJfCEizZHqVWwuaJLm"
bool(true)

   
```

## See Also

 `crypt_preferred_method()` `crypt()` `hash_equals()`
