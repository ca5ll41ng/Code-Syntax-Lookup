---
id: "en-php-function-reflectionproperty-gettype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getType"
title: "Gets a property's type"
signature: "public ReflectionType|null ReflectionProperty::getType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a property's type

## Description

```php
public ReflectionType|null ReflectionProperty::getType()
```

Gets the associated type of a property.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionType` if the property has a type, and `null` otherwise.

## Examples

**`ReflectionProperty::getType()` example**

```php


<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
echo $rp->getType()->getName();
?>

   
```

The above example will output:

```text


string

   
```

## See Also

 `ReflectionProperty::hasType()` `ReflectionProperty::isInitialized()`
