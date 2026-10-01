---
id: "en-php-function-function-runkit7-constant-add"
language: "php"
lang: "en"
category: "function"
name: "runkit7_constant_add"
title: "Similar to define(), but allows defining in class definitions as well"
signature: "bool runkit7_constant_add(string $constant_name, mixed $value, [int $newVisibility = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-constant-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Similar to define(), but allows defining in class definitions as well

## Description

```php
bool runkit7_constant_add(string $constant_name, mixed $value, [int $newVisibility = ...])
```

## Parameters

- **`$constant_name`** — Name of constant to declare. Either a string to indicate a global constant, or `classname::constname` to indicate a class constant.
- **`$value`** — NULL, Bool, Long, Double, String, Array, or Resource value to store in the new constant.
- **`$newVisibility`** — Visibility of the constant, for class constants. Public by default. One of the `RUNKIT7_ACC_{*}` constants.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `define()` `runkit7_constant_redefine()` `runkit7_constant_remove()`
