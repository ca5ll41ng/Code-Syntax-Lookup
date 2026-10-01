---
id: "en-php-function-function-runkit7-function-remove"
language: "php"
lang: "en"
category: "function"
name: "runkit7_function_remove"
title: "Remove a function definition"
signature: "bool runkit7_function_remove(string $function_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-function-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a function definition

## Description

```php
bool runkit7_function_remove(string $function_name)
```

> By default, only userspace functions may be removed, renamed, or modified. In order to override internal functions, you must enable the `runkit.internal_override` setting in php.ini.

## Parameters

- **`$function_name`** — Name of the function to be deleted

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `runkit7_function_add()` `runkit7_function_copy()` `runkit7_function_redefine()` `runkit7_function_rename()`
