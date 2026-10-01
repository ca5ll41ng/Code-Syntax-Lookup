---
id: "en-php-function-function-runkit7-method-redefine"
language: "php"
lang: "en"
category: "function"
name: "runkit7_method_redefine"
title: "Dynamically changes the code of the given method"
signature: "bool runkit7_method_redefine(string $class_name, string $method_name, string $argument_list, string $code, int $flags = RUNKIT7_ACC_PUBLIC, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])"
module: "runkit7"
source_url: "https://www.php.net/manual/en/function.runkit7-method-redefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dynamically changes the code of the given method

## Description

```php
bool runkit7_method_redefine(string $class_name, string $method_name, string $argument_list, string $code, int $flags = RUNKIT7_ACC_PUBLIC, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

```php
bool runkit7_method_redefine(string $class_name, string $method_name, Closure $closure, int $flags = RUNKIT7_ACC_PUBLIC, string $doc_comment = null, [string $return_type = ...], [bool $is_strict = ...])
```

## Parameters

- **`$class_name`** — The class in which to redefine the method
- **`$method_name`** — The name of the method to redefine
- **`$argument_list`** — Comma-delimited list of arguments for the redefined method
- **`$code`** — The new code to be evaluated when `$method_name` is called
- **`$closure`** — A `closure` that defines the method.
- **`$flags`** — The redefined method can be `RUNKIT7_ACC_PUBLIC`, `RUNKIT7_ACC_PROTECTED` or `RUNKIT7_ACC_PRIVATE` optionally combined via bitwise OR with `RUNKIT7_ACC_STATIC`
- **`$doc_comment`** — The doc comment of the method.
- **`$return_type`** — The return type of the method.
- **`$is_strict`** — Whether the method behaves as if it was declared in a file with `strict_types=1`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`runkit7_method_redefine()` example**

```php


<?php
class Example {
    function foo() {
        return "foo!\n";
    }
}

// create an Example object
$e = new Example();

// output Example::foo() (before redefine)
echo "Before: " . $e->foo();

// Redefine the 'foo' method
runkit7_method_redefine(
    'Example',
    'foo',
    '',
    'return "bar!\n";',
    RUNKIT7_ACC_PUBLIC
);

// output Example::foo() (after redefine)
echo "After: " . $e->foo();
?>

   
```

The above example will output:

```text


Before: foo!
After: bar!

   
```

## See Also

 `runkit7_method_add()` `runkit7_method_copy()` `runkit7_method_remove()` `runkit7_method_rename()` `runkit7_function_redefine()`
