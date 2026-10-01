---
id: "en-php-function-function-uopz-unset-mock"
language: "php"
lang: "en"
category: "function"
name: "uopz_unset_mock"
title: "Unset previously set mock"
signature: "void uopz_unset_mock(string $class)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-unset-mock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unset previously set mock

## Description

```php
void uopz_unset_mock(string $class)
```

Unsets the previously set mock for `$class`.

## Parameters

- **`$class`** — The name of the mocked class.

## Return Values

No value is returned.

## Errors/Exceptions

A `RuntimeException` is thrown, if no mock was previously set for `$class`.

## Examples

**`uopz_unset_mock()` example**

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
uopz_unset_mock(A::class);
A::who();
?>

   
```

The above example will output:

```text


A

   
```

## See Also

 `uopz_set_mock()` `uopz_get_mock()`
