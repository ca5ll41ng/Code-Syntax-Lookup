---
id: "en-php-function-reflectionproperty-getsettabletype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getSettableType"
title: "Returns the parameter type of a setter hook"
signature: "public ReflectionType|null ReflectionProperty::getSettableType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getsettabletype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the parameter type of a setter hook

## Description

```php
public ReflectionType|null ReflectionProperty::getSettableType()
```

Returns the parameter type of a `set` hook. If no `set` hook is defined, it behaves identically to `ReflectionProperty::getType()`.

## Parameters

This function has no parameters.

## Return Values

  This method returns an instance of `ReflectionType` that matches the settable type for the property.   If there is a `set` hook that defines an explicit type, that will be returned.   If the hook does not specify a type, or it does not exist, the property type will be returned, identically to `ReflectionProperty::getType()`. This value may be `null` if the property is untyped.   If the property is virtual and has no `set` hook, a `ReflectionType` instance for `never` will be returned.  

## Examples

**`ReflectionProperty::getSettableType()` example**

```php


<?php

class Example
{
    public string $basic {
        set => strtolower($value);
    }

    public string $wider {
        set(string|Stringable $value) => (string) $value;
    }

    public string $virtual {
        get => 'Do not change this';
    }

    public $untyped = 'silly';
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('basic')->getSettableType());
var_dump($rClass->getProperty('wider')->getSettableType());
var_dump($rClass->getProperty('virtual')->getSettableType());
var_dump($rClass->getProperty('untyped')->getSettableType());

?>

   
```

The above example will output:

```text


object(ReflectionNamedType)#3 (0) {
}
object(ReflectionUnionType)#2 (0) {
}
object(ReflectionNamedType)#3 (0) {
}
NULL

   
```

## See Also

 `ReflectionProperty::getType()`
