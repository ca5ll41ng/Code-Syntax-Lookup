---
id: "en-php-function-function-uopz-get-mock"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_mock"
title: "Get the current mock for a class"
signature: "mixed uopz_get_mock(string $class)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-mock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the current mock for a class

## Description

```php
mixed uopz_get_mock(string $class)
```

Returns the current mock for `$class`.

## Parameters

- **`$class`** — The name of the mocked class.

## Return Values

Either a string containing the name of the mock, or an object, or `null` if no mock has been set.

## Examples

**`uopz_get_mock()` example**

```php


<?php
class A {
    public static function who() {
        echo "A";
    }
}

class mockA {
    public static function who() {
        echo "mockA";
    }
}

uopz_set_mock(A::class, mockA::class);
echo uopz_get_mock(A::class);
?>

   
```

The above example will output:

```text


mockA

   
```

## See Also

 `uopz_set_mock()` `uopz_unset_mock()`
