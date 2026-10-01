---
id: "en-php-function-function-runkit7-function-rename"
language: "php"
lang: "en"
category: "function"
name: "runkit7_function_rename"
title: "Change a function's name"
signature: "bool runkit7_function_rename(string $source_name, string $target_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-function-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change a function's name

## Description

```php
bool runkit7_function_rename(string $source_name, string $target_name)
```

> By default, only userspace functions may be removed, renamed, or modified. In order to override internal functions, you must enable the `runkit.internal_override` setting in php.ini.

## Parameters

- **`$source_name`** — Current function name
- **`$target_name`** — New function name

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `runkit7_function_add()` `runkit7_function_copy()` `runkit7_function_redefine()` `runkit7_function_remove()`
