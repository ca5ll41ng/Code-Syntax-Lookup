---
id: "en-php-function-function-password-algos"
language: "php"
lang: "en"
category: "function"
name: "password_algos"
title: "Get available password hashing algorithm IDs"
signature: "array password_algos()"
module: "password"
source_url: "https://www.php.net/manual/en/function.password-algos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get available password hashing algorithm IDs

## Description

```php
array password_algos()
```

Returns a complete list of all registered password hashing algorithm IDs as an `array` of `string`s.

## Parameters

This function has no parameters.

## Return Values

Returns the available password hashing algorithm IDs.

## Examples

**Basic `password_algos()` usage**

```php


<?php
print_r(password_algos());
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => 2y
    [1] => argon2i
    [2] => argon2id
)

   
```
