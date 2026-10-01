---
id: "en-php-function-function-uopz-flags"
language: "php"
lang: "en"
category: "function"
name: "uopz_flags"
title: "Get or set flags on function or class"
signature: "int uopz_flags(string $function, int $flags = PHP_INT_MAX)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get or set flags on function or class

## Description

```php
int uopz_flags(string $function, int $flags = PHP_INT_MAX)
```

```php
int uopz_flags(string $class, string $function, int $flags = PHP_INT_MAX)
```

Get or set the flags on a class or function entry at runtime

## Parameters

- **`$class`** — The name of a class
- **`$function`** — The name of the function. If `$class` is given and an empty string is passed as `$function`, `uopz_flags()` gets or sets the flags of the class entry.
- **`$flags`** — A valid set of ZEND_ACC_ flags. If omitted, `uopz_flags()` acts as getter.

## Return Values

If setting, returns old flags, else returns flags

## Errors/Exceptions

As of PHP 7.4.0, if the parameter `$flags` is passed, `uopz_flags()` throws a `RuntimeException`, if OPcache is enabled, and the class entry of `$class` or the function entry of `$function` is immutable.

## Changelog

|  |  |
| --- | --- |
| PECL uopz 5.0.0 | The `$flags` parameter is now optional. Formerly, `ZEND_ACC_FETCH` had to be passed to use `uopz_flags()` as getter. |

## Examples

**`uopz_flags()` example**

```php


<?php
class Test {
    public function method() {
        return __CLASS__;
    }
}

$flags = uopz_flags("Test", "method");

var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_PRIVATE));
var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_STATIC));

var_dump(uopz_flags("Test", "method", $flags|ZEND_ACC_STATIC|ZEND_ACC_PRIVATE));

var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_PRIVATE));
var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_STATIC));
?>

   
```

The above example will output:

```text


bool(false)
bool(false)
int(1234567890)
bool(true)
bool(true)

   
```

**"Unfinalize" a Class**

```php


<?php
final class MyClass
{
}

$flags = uopz_flags(MyClass::class, '');
uopz_flags(MyClass::class, '', $flags & ~ZEND_ACC_FINAL);
var_dump((new ReflectionClass(MyClass::class))->isFinal());
?>

   
```

The above example will output:

```text


bool(false)

   
```
