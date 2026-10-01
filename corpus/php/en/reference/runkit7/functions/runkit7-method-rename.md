---
id: "en-php-function-function-runkit7-method-rename"
language: "php"
lang: "en"
category: "function"
name: "runkit7_method_rename"
title: "Dynamically changes the name of the given method"
signature: "bool runkit7_method_rename(string $class_name, string $source_method_name, string $target_method_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-method-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dynamically changes the name of the given method

## Description

```php
bool runkit7_method_rename(string $class_name, string $source_method_name, string $target_method_name)
```

> This function cannot be used to manipulate the currently running (or chained) method.

## Parameters

- **`$class_name`** — The class in which to rename the method
- **`$source_method_name`** — The name of the method to rename
- **`$target_method_name`** — The new name to give to the renamed method

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`runkit7_method_rename()` example**

```php


<?php
class Example {
    function foo() {
        return "foo!\n";
    }
}

// Rename the 'foo' method to 'bar'
runkit7_method_rename(
    'Example',
    'foo',
    'bar'
);

// output renamed function
echo (new Example)->bar();
?>

   
```

The above example will output:

```text


foo!

   
```

## See Also

 `runkit7_method_add()` `runkit7_method_copy()` `runkit7_method_redefine()` `runkit7_method_remove()` `runkit7_function_rename()`
