---
id: "en-php-function-function-uopz-set-mock"
language: "php"
lang: "en"
category: "function"
name: "uopz_set_mock"
title: "Use mock instead of class for new objects"
signature: "void uopz_set_mock(string $class, mixed $mock)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-set-mock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Use mock instead of class for new objects

## Description

```php
void uopz_set_mock(string $class, mixed $mock)
```

If `$mock` is a string containing the name of a class then it will be instantiated instead of `$class`. `$mock` can also be an object.

> Only dynamic access to properties and methods will use the `$mock` object. Static access still uses the original `$class`. See example below.

## Parameters

- **`$class`** — The name of the class to be mocked.
- **`$mock`** — The mock to use in the form of a string containing the name of the class to use or an object. If a string is passed, it has to be the fully qualified class name. It is recommended to use the ::class magic constant in this case.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| PECL uopz 6.0.0 | Mocking static members is no longer supported by this function. `uopz_redefine()` and `uopz_set_return()`, or Componere can be used instead. |

## Examples

**`uopz_set_mock()` example**

```php


<?php
class A {
    public function who() {
        echo "A";
    }
}

class mockA {
    public function who() {
        echo "mockA";
    }
}

uopz_set_mock(A::class, mockA::class);
(new A)->who();
?>

   
```

The above example will output:

```text


mockA

   
```

**`uopz_set_mock()` example**

```php


<?php
class A {
    public function who() {
        echo "A";
    }
}

uopz_set_mock(A::class, new class {
                            public function who() {
                                echo "mockA";
                            }
                        });
(new A)->who();
?>

   
```

The above example will output:

```text


mockA

   
```

**`uopz_set_mock()` and static members**

As of uopz 6.0.0 mocking static members is no longer supported.

```php


<?php
class A {
    const CON = 'A';
    public static function who() {
        echo "A";
    }
}

uopz_set_mock(A::class, new class {
                            const CON = 'mockA';
                            public static function who() {
                                echo "mockA";
                            }
                        });
echo A::CON, PHP_EOL;
A::who();
?>

   
```

The above example will output:

```text


A
A

   
```

Output of the above example in uopz 5:

```text


mockA
mockA

   
```

## See Also

 `uopz_get_mock()` `uopz_unset_mock()`
