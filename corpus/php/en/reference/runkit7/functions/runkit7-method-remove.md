---
id: "en-php-function-function-runkit7-method-remove"
language: "php"
lang: "en"
category: "function"
name: "runkit7_method_remove"
title: "Dynamically removes the given method"
signature: "bool runkit7_method_remove(string $class_name, string $method_name)"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-method-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dynamically removes the given method

## Description

```php
bool runkit7_method_remove(string $class_name, string $method_name)
```

> This function cannot be used to manipulate the currently running (or chained) method.

## Parameters

- **`$class_name`** — The class in which to remove the method
- **`$method_name`** — The name of the method to remove

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`runkit7_method_remove()` example**

```php


<?php
class Example {
    function foo() {
        return "foo!\n";
    }

    function bar() {
        return "bar!\n";
    }
}

// Remove the 'foo' method
runkit7_method_remove(
    'Example',
    'foo'
);

echo implode(' ', get_class_methods('Example'));

?>

   
```

The above example will output:

```text


bar

   
```

## See Also

 `runkit7_method_add()` `runkit7_method_copy()` `runkit7_method_redefine()` `runkit7_method_rename()` `runkit7_function_remove()`
