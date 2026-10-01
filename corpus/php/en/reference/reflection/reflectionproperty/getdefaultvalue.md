---
id: "en-php-function-reflectionproperty-getdefaultvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getDefaultValue"
title: "Returns the default value declared for a property"
signature: "public mixed ReflectionProperty::getDefaultValue()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getdefaultvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the default value declared for a property

## Description

```php
public mixed ReflectionProperty::getDefaultValue()
```

Gets the implicit or explicitly declared default value for a property.

## Parameters

This function has no parameters.

## Return Values

The default value if the property has any default value (including `null`). If there is no default value, then `null` is returned. It is not possible to differentiate between a `null` default value and an uninitialized typed property. Use `ReflectionProperty::hasDefaultValue()` to detect the difference.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Calling `ReflectionProperty::getDefaultValue()` for properties without default values has been deprecated. |

## Examples

**`ReflectionProperty::getDefaultValue()` example**

```php


<?php
class Foo {
    public $bar = 1;
    public ?int $baz;
    public int $boing = 0;
    public function __construct(public string $bak = "default") { }
}

$ro = new ReflectionClass(Foo::class);
var_dump($ro->getProperty('bar')->getDefaultValue());
var_dump($ro->getProperty('baz')->getDefaultValue());
var_dump($ro->getProperty('boing')->getDefaultValue());
var_dump($ro->getProperty('bak')->getDefaultValue());
?>

 
```

The above example will output:

```text


int(1)
NULL
int(0)
NULL

 
```

## See Also

`ReflectionProperty::hasDefaultValue()`
