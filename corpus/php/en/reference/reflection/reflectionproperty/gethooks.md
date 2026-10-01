---
id: "en-php-function-reflectionproperty-gethooks"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getHooks"
title: "Returns an array of all hooks on this property"
signature: "public array ReflectionProperty::getHooks()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.gethooks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of all hooks on this property

## Description

```php
public array ReflectionProperty::getHooks()
```

Returns a list of all hooks on this property.

## Parameters

This function has no parameters.

## Return Values

An array of `ReflectionMethod` objects keyed by the hook they are for. For example, a property with both `get` and `set` hooks will return a 2 element array with string keys `get` and `set`, each of which are a `ReflectionMethod` object. The order in which they are returned is explicitly undefined. If no hooks are defined, an empty array is returned.

## Examples

**`ReflectionProperty::getHooks()` example**

```php


<?php
class Example
{
    public string $name { get => "Name here"; }

    public int $count;
}

$rClass = new \ReflectionClass(Example::class);

$rProp = $rClass->getProperty('name');
var_dump($rProp->getHooks());

$rProp = $rClass->getProperty('count');
var_dump($rProp->getHooks());
?>

   
```

The above example will output:

```text


array(1) {
  ["get"]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(10) "$name::get"
    ["class"]=>
    string(7) "Example"
  }
}
array(0) {
}

   
```

## See Also

 `ReflectionMethod` `ReflectionProperty::hasHooks()`
