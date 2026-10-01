---
id: "en-php-function-reflectionproperty-getmangledname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getMangledName"
title: "Gets the mangled name of the property"
signature: "public string ReflectionProperty::getMangledName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getmangledname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the mangled name of the property

## Description

```php
public string ReflectionProperty::getMangledName()
```

Returns the mangled (internal) name of the property, which encodes the visibility scope for private and protected properties.

For public properties, the mangled name is identical to the property name. For protected properties, the mangled name has the form `\0*\0{name}`. For private properties, the mangled name has the form `\0{ClassName}\0{name}`.

## Parameters

This function has no parameters.

## Return Values

The mangled name of the reflected property.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method was introduced. |

## See Also

 `ReflectionProperty::getName()`
