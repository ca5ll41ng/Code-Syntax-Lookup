---
id: "en-php-function-function-runkit7-constant-redefine"
language: "php"
lang: "en"
category: "function"
name: "runkit7_constant_redefine"
title: "Redefine an already defined constant"
signature: "bool runkit7_constant_redefine(string $constant_name, mixed $value, [int $new_visibility = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-constant-redefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Redefine an already defined constant

## Description

```php
bool runkit7_constant_redefine(string $constant_name, mixed $value, [int $new_visibility = ...])
```

## Parameters

- **`$constant_name`** — Constant to redefine. Either the name of a global constant, or `classname::constname` indicating class constant.
- **`$value`** — Value to assign to the constant.
- **`$new_visibility`** — The new visibility of the constant, for class constants. Unchanged by default. One of the `RUNKIT7_ACC_{*}` constants.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `runkit7_constant_add()` `runkit7_constant_remove()`
