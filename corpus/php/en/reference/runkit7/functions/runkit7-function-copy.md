---
id: "en-php-function-function-runkit7-function-copy"
language: "php"
lang: "en"
category: "function"
name: "runkit7_function_copy"
title: "Copy a function to a new function name"
signature: "bool runkit7_function_copy(string $source_name, string $target_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-function-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy a function to a new function name

## Description

```php
bool runkit7_function_copy(string $source_name, string $target_name)
```

## Parameters

- **`$source_name`** — Name of the existing function
- **`$target_name`** — Name of the new function to copy the definition to

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `runkit7_function_copy()` example**

```php


<?php
function original() {
  echo "In a function\n";
}
runkit7_function_copy('original','duplicate');
original();
duplicate();
?>

   
```

The above example will output:

```text


In a function
In a function

   
```

## See Also

 `runkit7_function_add()` `runkit7_function_redefine()` `runkit7_function_rename()` `runkit7_function_remove()`
