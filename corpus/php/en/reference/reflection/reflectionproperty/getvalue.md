---
id: "en-php-function-reflectionproperty-getvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getValue"
title: "Gets value"
signature: "public mixed ReflectionProperty::getValue(object|null $object = null)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets value

## Description

```php
public mixed ReflectionProperty::getValue(object|null $object = null)
```

Gets the property's value.

## Parameters

- **`$object`** — If the property is non-static an object must be provided to fetch the property from. If you want to fetch the default property without providing an object use `ReflectionClass::getDefaultProperties()` instead.

## Return Values

The current value of the property.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Private and protected properties can be accessed by `ReflectionProperty::getValue()` right away. Previously, they needed to be made accessible by calling `ReflectionProperty::setAccessible()`; otherwise a `ReflectionException` was thrown. |
| 8.0.0 | `$object` is nullable now. |

## Examples

**`ReflectionProperty::getValue()` example**

```php


<?php
class Foo {
    public static $staticProperty = 'foobar';
    
    public $property = 'barfoo';
    protected $privateProperty = 'foofoo';
}

$reflectionClass = new ReflectionClass('Foo');

var_dump($reflectionClass->getProperty('staticProperty')->getValue());
var_dump($reflectionClass->getProperty('property')->getValue(new Foo));

$reflectionProperty = $reflectionClass->getProperty('privateProperty');
$reflectionProperty->setAccessible(true); // only required prior to PHP 8.1.0
var_dump($reflectionProperty->getValue(new Foo));
?>

    
```

The above example will output:

```text


string(6) "foobar"
string(6) "barfoo"
string(6) "foofoo"

    
```

## See Also

`ReflectionProperty::setValue()` `ReflectionProperty::setAccessible()` `ReflectionClass::getDefaultProperties()` `ReflectionClass::getStaticPropertyValue()`
