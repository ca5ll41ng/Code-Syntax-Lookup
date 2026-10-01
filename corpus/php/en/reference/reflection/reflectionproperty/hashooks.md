---
id: "en-php-function-reflectionproperty-hashooks"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::hasHooks"
title: "Returns whether the property has any hooks defined"
signature: "public bool ReflectionProperty::hasHooks()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.hashooks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the property has any hooks defined

## Description

```php
public bool ReflectionProperty::hasHooks()
```

> This function is currently not documented; only its argument list is available.

Returns whether the property has any hooks defined.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the property has at least one hook defined, `false` otherwise.

## Examples

**`ReflectionProperty::hasHooks()` example**

```php


<?php
class Example
{
    public string $name { get => "Name here"; }

    public string $none;
}

$rClass = new \ReflectionClass(Example::class);
var_dump($rClass->getProperty('name')->hasHooks());
var_dump($rClass->getProperty('none')->hasHooks());
?>

   
```

The above example will output:

```text


bool(true)
bool(false)

   
```

## Notes

> This method is equivalent to checking `ReflectionProperty::getHooks()` against an empty array.

## See Also

 `ReflectionProperty::getHooks()`
