---
id: "en-php-function-function-runkit7-constant-remove"
language: "php"
lang: "en"
category: "function"
name: "runkit7_constant_remove"
title: "Remove/Delete an already defined constant"
signature: "bool runkit7_constant_remove(string $constant_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-constant-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove/Delete an already defined constant

## Description

```php
bool runkit7_constant_remove(string $constant_name)
```

## Parameters

- **`$constant_name`** — Name of the constant to remove. Either the name of a global constant, or `classname::constname` indicating a class constant.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `define()` `runkit7_constant_add()` `runkit7_constant_redefine()`
