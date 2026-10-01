---
id: "en-php-function-reflectionproperty-isdynamic"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isDynamic"
title: "Checks if property is a dynamic property"
signature: "public bool ReflectionProperty::isDynamic()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isdynamic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is a dynamic property

## Description

```php
public bool ReflectionProperty::isDynamic()
```

Checks whether the property was declared at run-time, or whether the property was declared at compile-time.

## Parameters

This function has no parameters.

## Return Values

`true` if the property was declared at run-time, or `false` if it was created at compile-time.

## Examples

**`ReflectionProperty::isDynamic()` example**

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
var_dump($ro->getProperty('bar')->isDynamic());
var_dump($ro->getProperty('baz')->isDynamic());
?>

   
```

The above example will output:

```text


bool(false)
bool(true)

   
```

## See Also

 `ReflectionProperty::getValue()`
