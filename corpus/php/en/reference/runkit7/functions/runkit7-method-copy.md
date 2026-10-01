---
id: "en-php-function-function-runkit7-method-copy"
language: "php"
lang: "en"
category: "function"
name: "runkit7_method_copy"
title: "Copies a method from class to another"
signature: "bool runkit7_method_copy(string $destination_class, string $destination_method_name, string $source_class, [string $source_method_name = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-method-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copies a method from class to another

## Description

```php
bool runkit7_method_copy(string $destination_class, string $destination_method_name, string $source_class, [string $source_method_name = ...])
```

## Parameters

- **`$destination_class`** — Destination class for copied method
- **`$destination_method_name`** — Destination method name
- **`$source_class`** — Source class of the method to copy
- **`$source_method_name`** — Name of the method to copy from the source class. If this parameter is omitted, the value of `$destination_method_name` is assumed.

## Return Values

## Examples

**`runkit7_method_copy()` example**

```php


<?php
class Foo {
    function example() {
        return "foo!\n";
    }
}

class Bar {
    // initially, no methods
}

// copy the example() method from the Foo class to the Bar class, as baz()
runkit7_method_copy('Bar', 'baz', 'Foo', 'example');

// output copied function
echo Bar::baz();
?>

   
```

The above example will output:

```text


foo!

   
```

## See Also

 `runkit7_method_add()` `runkit7_method_redefine()` `runkit7_method_remove()` `runkit7_method_rename()` `runkit7_function_copy()`
