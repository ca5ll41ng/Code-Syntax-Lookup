---
id: "en-php-function-reflectionproperty-isfinal"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isFinal"
title: "Determines if this property is final or not"
signature: "public bool ReflectionProperty::isFinal()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isfinal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if this property is final or not

## Description

```php
public bool ReflectionProperty::isFinal()
```

> This function is currently not documented; only its argument list is available.

Returns whether the property is `final`. If the property is marked `private(set)`, then it will also be implicitly `final`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the property is explicitly marked `final`, or if it is implicitly `final` due to being `private(set)`. Returns `false` otherwise.

## Examples

**`ReflectionProperty::isFinal()` example**

```php


<?php
class Example
{
    public string $name;

    final protected int $age;

    public private(set) string $job;
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('name')->isFinal());
var_dump($rClass->getProperty('age')->isFinal());
var_dump($rClass->getProperty('job')->isFinal());
?>

   
```

The above example will output:

```text


bool(false)
bool(true)
bool(true)

   
```

## See Also

 `final` class elements Asymmetric property visibility
