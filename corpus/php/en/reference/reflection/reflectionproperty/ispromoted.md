---
id: "en-php-function-reflectionproperty-ispromoted"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isPromoted"
title: "Checks if property is promoted"
signature: "public bool ReflectionProperty::isPromoted()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.ispromoted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is promoted

## Description

```php
public bool ReflectionProperty::isPromoted()
```

Checks whether the property is promoted

## Parameters

This function has no parameters.

## Return Values

`true` if the property is promoted, `false` otherwise.

## Examples

**`ReflectionProperty::isPromoted()` example**

```php


<?php
class Foo {
    public $baz;

    public function __construct(public $bar) {}
}

$o = new Foo(42);
$o->baz = 42;

$ro = new ReflectionObject($o);
var_dump($ro->getProperty('bar')->isPromoted());
var_dump($ro->getProperty('baz')->isPromoted());
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

## See Also

`ReflectionProperty::isDefault()` `ReflectionProperty::isInitialized()` `ReflectionProperty::getValue()`
