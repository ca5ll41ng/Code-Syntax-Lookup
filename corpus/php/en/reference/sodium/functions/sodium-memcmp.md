---
id: "en-php-function-function-sodium-memcmp"
language: "php"
lang: "en"
category: "function"
name: "sodium_memcmp"
title: "Test for equality in constant-time"
signature: "int sodium_memcmp(string $string1, string $string2)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-memcmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test for equality in constant-time

## Description

```php
int sodium_memcmp(string $string1, string $string2)
```

Compare two strings in constant-time.

In practice, you almost always want to use `hash_equals()` instead, since it provides the same logic but returns a `bool` instead of an `int`. However, if you're using the return value of a comparison in a calculation that's timing-sensitive, and worried about timing leaks with bool-to-int conversions, `sodium_memcmp()` is an ideal replacement.

## Parameters

- **`$string1`** — String to compare
- **`$string2`** — Other string to compare

## Return Values

Returns `0` if both strings are equal; `-1` otherwise.
