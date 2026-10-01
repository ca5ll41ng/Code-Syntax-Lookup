---
id: "en-php-function-function-uopz-compose"
language: "php"
lang: "en"
category: "function"
name: "uopz_compose"
title: "Compose a class"
signature: "void uopz_compose(string $name, array $classes, [array $methods = ...], [array $properties = ...], [int $flags = ...])"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-compose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compose a class

## Description

```php
void uopz_compose(string $name, array $classes, [array $methods = ...], [array $properties = ...], [int $flags = ...])
```

Creates a new class of the given name that implements, extends, or uses all of the provided classes

## Parameters

- **`$name`** — A legal class name
- **`$classes`** — An array of class, interface and trait names
- **`$methods`** — An associative array of methods, values are either closures or [modifiers => closure]
- **`$properties`** — An associative array of properties, keys are names, values are modifiers
- **`$flags`** — Entry type, by default ZEND_ACC_CLASS

## Return Values

## Examples

**`uopz_compose()` example**

```php


<?php
class myClass {}
trait myTrait {}
interface myInterface {}

uopz_compose(
    Composed::class, [
        myClass::class,
        myTrait::class,
        myInterface::class
    ], [
    "__construct" => function() {
        /* ... */
    }
]);

var_dump(
 class_uses(Composed::class),
 class_parents(Composed::class),
 class_implements(Composed::class));
?>

   
```

The above example will output:

```text


array(1) {
  ["myTrait"]=>
  string(7) "myTrait"
}
array(1) {
  ["myClass"]=>
  string(7) "myClass"
}
array(1) {
  ["myInterface"]=>
  string(11) "myInterface"
}

   
```
