---
id: "en-php-function-function-runkit7-function-redefine"
language: "php"
lang: "en"
category: "function"
name: "runkit7_function_redefine"
title: "Replace a function definition with a new implementation"
signature: "bool runkit7_function_redefine(string $function_name, string $argument_list, string $code, bool $return_by_reference = null, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-function-redefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace a function definition with a new implementation

## Description

```php
bool runkit7_function_redefine(string $function_name, string $argument_list, string $code, bool $return_by_reference = null, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

```php
bool runkit7_function_redefine(string $function_name, Closure $closure, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

> By default, only userspace functions may be removed, renamed, or modified. In order to override internal functions, you must enable the `runkit.internal_override` setting in php.ini.

## Parameters

- **`$function_name`** — Name of function to redefine
- **`$argument_list`** — New list of arguments to be accepted by function
- **`$code`** — New code implementation
- **`$closure`** — A `closure` that defines the function.
- **`$return_by_reference`** — Whether the function should return by reference.
- **`$doc_comment`** — The doc comment of the function.
- **`$return_type`** — The return type of the function.
- **`$is_strict`** — Whether the function behaves as if it was declared in a file with `strict_types=1`

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `runkit7_function_redefine()` example**

```php


<?php
function testme() {
  echo "Original Testme Implementation\n";
}
testme();
runkit7_function_redefine('testme','','echo "New Testme Implementation\n";');
testme();
?>

   
```

The above example will output:

```text


Original Testme Implementation
New Testme Implementation

   
```

## See Also

 `runkit7_function_add()` `runkit7_function_copy()` `runkit7_function_rename()` `runkit7_function_remove()` `runkit7_method_redefine()`
