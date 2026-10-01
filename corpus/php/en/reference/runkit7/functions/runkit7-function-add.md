---
id: "en-php-function-function-runkit7-function-add"
language: "php"
lang: "en"
category: "function"
name: "runkit7_function_add"
title: "Add a new function, similar to `create_function()`"
signature: "bool runkit7_function_add(string $function_name, string $argument_list, string $code, bool $return_by_reference = null, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-function-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a new function, similar to `create_function()`

## Description

```php
bool runkit7_function_add(string $function_name, string $argument_list, string $code, bool $return_by_reference = null, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

```php
bool runkit7_function_add(string $function_name, Closure $closure, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

## Parameters

- **`$function_name`** — Name of the function to be created
- **`$argument_list`** — Comma separated argument list
- **`$code`** — Code making up the function
- **`$closure`** — A `closure` that defines the function.
- **`$return_by_reference`** — Whether the function should return by reference.
- **`$doc_comment`** — The doc comment of the function.
- **`$return_type`** — The return type of the function.
- **`$is_strict`** — Whether the function should behave as if it were declared in a file with `strict_types=1`

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `runkit7_function_add()` example**

```php


<?php
runkit7_function_add('testme','$a,$b','echo "The value of a is $a\n"; echo "The value of b is $b\n";');
testme(1,2);
?>

   
```

The above example will output:

```text


The value of a is 1
The value of b is 2

   
```

## See Also

 `create_function()` `runkit7_function_redefine()` `runkit7_function_copy()` `runkit7_function_rename()` `runkit7_function_remove()` `runkit7_method_add()`
