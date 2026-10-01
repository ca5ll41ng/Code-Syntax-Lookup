---
id: "en-php-function-reflectionproperty-isdefault"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isDefault"
title: "Checks if property is a default property"
signature: "public bool ReflectionProperty::isDefault()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isdefault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is a default property

## Description

```php
public bool ReflectionProperty::isDefault()
```

Checks whether the property was declared at compile-time, or whether the property was dynamically declared at run-time.

## Parameters

This function has no parameters.

## Return Values

`true` if the property was declared at compile-time, or `false` if it was created at run-time.

## Examples

**`ReflectionProperty::isDefault()` example**

```php


<?php

#[\AllowDynamicProperties]
class Foo {
    public $bar;
}

$o = new Foo();
$o->bar = 42;
$o->baz = 42;

$ro = new ReflectionObject($o);
var_dump($ro->getProperty('bar')->isDefault());
var_dump($ro->getProperty('baz')->isDefault());
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

## See Also

`ReflectionProperty::getValue()`
