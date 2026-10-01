---
id: "en-php-function-function-sodium-compare"
language: "php"
lang: "en"
category: "function"
name: "sodium_compare"
title: "Compare large numbers"
signature: "int sodium_compare(string $string1, string $string2)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare large numbers

## Description

```php
int sodium_compare(string $string1, string $string2)
```

Compare two strings as if they were arbitrary-length, unsigned little-endian integers, without side-channel leakage.

## Parameters

- **`$string1`** — Left operand
- **`$string2`** — Right operand

## Return Values

Returns `-1` if `$string1` is less than `$string2`.

Returns `1` if `$string1` is greater than `$string2`.

Returns `0` if both strings are equal.
