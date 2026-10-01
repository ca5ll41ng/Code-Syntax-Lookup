---
id: "en-php-function-reflectionproperty-hastype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::hasType"
title: "Checks if property has a type"
signature: "public bool ReflectionProperty::hasType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.hastype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property has a type

## Description

```php
public bool ReflectionProperty::hasType()
```

Checks if the property has a type associated with it.

## Parameters

This function has no parameters.

## Return Values

`true` if a type is specified, `false` otherwise.

## Examples

**`ReflectionProperty::hasType()` example**

```php


<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
var_dump($rp->hasType());
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `ReflectionProperty::getType()` `ReflectionProperty::isInitialized()`
