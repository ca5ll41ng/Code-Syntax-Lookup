---
id: "en-php-function-function-sodium-add"
language: "php"
lang: "en"
category: "function"
name: "sodium_add"
title: "Add large numbers"
signature: "void sodium_add(string $string1, string $string2)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add large numbers

## Description

```php
void sodium_add(string $string1, string $string2)
```

This adds the parameter `$string2` to `$string1`, overwriting the value stored in `$string1`. This function assumes both parameters are binary strings that represent unsigned integers in little-endian byte order.

## Parameters

- **`$string1`** — String representing an arbitrary-length unsigned integer in little-endian byte order. This parameter is passed by reference and will hold the sum of the two parameters.
- **`$string2`** — String representing an arbitrary-length unsigned integer in little-endian byte order.

## Return Values

No value is returned.
