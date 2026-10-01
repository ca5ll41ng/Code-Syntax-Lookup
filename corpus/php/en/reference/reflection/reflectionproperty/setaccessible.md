---
id: "en-php-function-reflectionproperty-setaccessible"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::setAccessible"
title: "Set property accessibility"
signature: "#[\\Deprecated(since: '8.5', message: \"as it has no effect since PHP 8.1\")] public void ReflectionProperty::setAccessible(bool $accessible)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.setaccessible.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set property accessibility

## Description

```php
#[\Deprecated(since: '8.5', message: "as it has no effect since PHP 8.1")] public void ReflectionProperty::setAccessible(bool $accessible)
```

Enables access to a protected or private property via the `ReflectionProperty::getValue()` and `ReflectionProperty::setValue()` methods.

> As of PHP 8.1.0, calling this method has no effect; all properties are accessible by default.

## Parameters

- **`$accessible`** — `true` to allow accessibility, or `false`.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method has been deprecated, as it no longer has an effect. |
| 8.1.0 | Calling this method has no effect; all properties are accessible by default. |

## Examples

**Simple Class definition**

```php


<?php
class MyClass
{
    private $foo = 'bar';
}

$property = new ReflectionProperty("MyClass", "foo");
$property->setAccessible(true);

$obj = new MyClass();
echo $property->getValue($obj);
echo $obj->foo;
?>

   
```

The above example will output something similar to:

```text


bar
Fatal error: Uncaught Error: Cannot access private property MyClass::$foo in /in/WJqTv:12

   
```

## See Also

`ReflectionProperty::isPrivate()` `ReflectionProperty::isProtected()`
