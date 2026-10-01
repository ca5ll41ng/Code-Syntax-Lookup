---
id: "en-php-function-function-uopz-get-property"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_property"
title: "Gets value of class or instance property"
signature: "mixed uopz_get_property(string $class, string $property)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-property.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets value of class or instance property

## Description

```php
mixed uopz_get_property(string $class, string $property)
```

```php
mixed uopz_get_property(object $instance, string $property)
```

Gets the value of a static class property, if `$class` is given, or the value of an instance property, if `$instance` is given.

## Parameters

- **`$class`** — The name of the class.
- **`$instance`** — The object instance.
- **`$property`** — The name of the property.

## Return Values

Returns the value of the class or instance property, or `null` if the property is not defined.

## Examples

**Basic `uopz_get_property()` Usage**

```php


<?php
class Foo {
    private static $staticBar = 10;
    private $bar = 100;
}
$foo = new Foo;
var_dump(uopz_get_property('Foo', 'staticBar'));
var_dump(uopz_get_property($foo, 'bar'));
?>

   
```

The above example will output something similar to:

```text


int(10)
int(100)

   
```

## See Also

 `uopz_set_property()`
