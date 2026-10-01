---
id: "en-php-function-reflectionproperty-setvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::setValue"
title: "Set property value"
signature: "public void ReflectionProperty::setValue(object|null $object, mixed $value)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.setvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set property value

## Description

```php
public void ReflectionProperty::setValue(object|null $object, mixed $value)
```

```php
public void ReflectionProperty::setValue(mixed $value)
```

Sets (changes) the property's value.

> To set static property values, use `ReflectionProperty::setValue(null, $value)`.

## Parameters

- **`$object`** — For static properties, pass in `null`. For non-static properties, pass in the object.
- **`$value`** — The new value.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method with a single argument is deprecated, instead use `ReflectionProperty::setValue(null, $value)` for static properties. |
| 8.1.0 | Private and protected properties can be accessed by `ReflectionProperty::setValue()` right away. Previously, they needed to be made accessible by calling `ReflectionProperty::setAccessible()`; otherwise a `ReflectionException` was thrown. |

## Examples

**`ReflectionProperty::setValue()` example**

```php


<?php
class Foo {
    public static $staticProperty;
    
    public $property;
    protected $privateProperty;
}

$reflectionClass = new ReflectionClass('Foo');

// As of PHP 8.3, passing in null as the first argument is required
// to access static properties.
$reflectionProperty = $reflectionClass->getProperty('staticProperty');
$reflectionProperty->setValue(null, 'foo');
var_dump(Foo::$staticProperty);

$foo = new Foo;

$reflectionClass->getProperty('property')->setValue($foo, 'bar');
var_dump($foo->property);

$reflectionProperty = $reflectionClass->getProperty('privateProperty');
$reflectionProperty->setAccessible(true); // only required prior to PHP 8.1.0
$reflectionProperty->setValue($foo, 'foobar');
var_dump($reflectionProperty->getValue($foo));
?>

    
```

The above example will output:

```text


string(3) "foo"
string(3) "bar"
string(6) "foobar"

    
```

## See Also

`ReflectionProperty::getValue()` `ReflectionProperty::setAccessible()` `ReflectionClass::setStaticPropertyValue()`
