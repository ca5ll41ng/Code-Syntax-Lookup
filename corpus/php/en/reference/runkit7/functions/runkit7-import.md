---
id: "en-php-function-function-runkit7-import"
language: "php"
lang: "en"
category: "function"
name: "runkit7_import"
title: "Process a PHP file importing function and class definitions, overwriting where appropriate"
signature: "bool runkit7_import(string $filename, [int $flags = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Process a PHP file importing function and class definitions, overwriting where appropriate

## Description

```php
bool runkit7_import(string $filename, [int $flags = ...])
```

Similar to `include()`. However, any code residing outside of a function or class is simply ignored. Additionally, depending on the value of `$flags`, any functions or classes which already exist in the currently running environment may be automatically overwritten by their new definitions.

## Parameters

- **`$filename`** — Filename to import function and class definitions from
- **`$flags`** — Bitwise OR of the `RUNKIT7_IMPORT_*` family of constants.

## Return Values

Returns `true` on success or `false` on failure.
