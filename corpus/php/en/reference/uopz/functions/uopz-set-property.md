---
id: "en-php-function-function-uopz-set-property"
language: "php"
lang: "en"
category: "function"
name: "uopz_set_property"
title: "Sets value of existing class or instance property"
signature: "void uopz_set_property(string $class, string $property, mixed $value)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-set-property.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets value of existing class or instance property

## Description

```php
void uopz_set_property(string $class, string $property, mixed $value)
```

```php
void uopz_set_property(object $instance, string $property, mixed $value)
```

Sets the value of an existing static class property, if `$class` is given, or the value of an instance property (regardless whether the instance property already exists), if `$instance` is given.

## Parameters

- **`$class`** — The name of the class.
- **`$instance`** — The object instance.
- **`$property`** — The name of the property.
- **`$value`** — The value to assign to the property.

## Return Values

No value is returned.

## Examples

**Basic `uopz_set_property()` Usage**

```php


<?php
class Foo {
   private static $staticBar;
   private $bar;
   public static function testStaticBar() {
      return self::$staticBar;
   }
   public function testBar() {
      return $this->bar;
   }
}
$foo = new Foo;
uopz_set_property('Foo', 'staticBar', 10);
uopz_set_property($foo, 'bar', 100);
var_dump(Foo::testStaticBar());
var_dump($foo->testBar());
?>

   
```

The above example will output:

```text


int(10)


   
```

## See Also

 `uopz_get_property()`
